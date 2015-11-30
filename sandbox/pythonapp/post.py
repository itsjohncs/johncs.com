"""Contains logic that deals with many of the details of rendering posts."""

import datetime
import os

from docutils.core import publish_parts
import yaml


def render_rst(text):
    """Renders some restructured text and returns generated HTML."""

    docutils_settings = {
        # I don't want <h1> tags in the post
        "initial_header_level": 2,

        # I don't want the docutils class added to every element
        "strip_classes": "docutils",

        "syntax_highlight": "short"
    }

    parts = publish_parts(text, writer_name="html",
                          settings_overrides=docutils_settings)

    # HACK(johnsullivan): This transformation would be better done in the RST transformation...
    return parts["html_body"].replace("<h2>", "<h2><span aria-hidden=\"true\">##</span> ")


def parse_frontmatter(post_contents):
    FRONT_MATTER_END = u"\n...\n"

    end = post_contents.find(FRONT_MATTER_END)
    if end == -1:
        return (None, post_contents)

    return (yaml.load(post_contents[:end]),
            post_contents[end + len(FRONT_MATTER_END):])


class Post(object):
    def __init__(self, path):
        with open(path, "rb") as f:
            frontmatter, content = parse_frontmatter(f.read().decode("utf-8"))

        # The path of the post file (ie: the RST file, not the result HTML
        # file).
        self.file_path = path

        self.title = frontmatter["title"]

        # HACK(johnsullivan): Getting rid of the tags in this way feels pretty dirty...
        self.description = (
            render_rst(frontmatter["description"])
                .replace("<p>", "").replace("</p>", "")
                .replace("<div class=\"document\">", "").replace("</div>", ""))

        # TODO(johnsullivan): Rename "date" to "published_on" in the frontmatter of all the posts.
        self.published_on = (
                datetime.datetime.strptime(frontmatter["date"],
                                           "%B %d, %Y"))
        self.async_scripts = frontmatter.get("async_scripts", [])
        self.postcontent_scripts = frontmatter.get("postcontent_scripts", [])
        self.raw_content = content

    def get_html_content(self):
        """Processes the raw content and returns HTML."""
        if self.file_path.endswith(".rst"):
            return render_rst(self.raw_content)
        else:
            raise ValueError(
                "Unknown post type (file_path=%r)" % self.file_path)

    def get_output_name(self):
        name, ext = os.path.splitext(os.path.basename(self.file_path))
        return name + ".htm"

    def get_metadata(self):
        return {
            "title": self.title,
            "published_on": self.published_on.strftime("%m/%d/%y"),
            "published_on_long": self.published_on.strftime("%B %-d, %Y"),
            "async_scripts": self.async_scripts,
            "postcontent_scripts": self.postcontent_scripts,
            "permalink": "posts/" + self.get_output_name(),
            "description": self.description,
        }
