import phial

from docutils.core import publish_parts
from collections import namedtuple
import pystache
import os
import datetime

@phial.pipeline(["*.css", "images/*"], binary_mode=True)
def simple_assets(source):
    # Just copy them over without modification
    return source

def render_rst(text):
    """Renders some restructured text and returns generated HTML."""

    docutils_settings = {
        # I don't want <h1> tags in the post
        "initial_header_level": 2,

        # I don't want the docutils class added to every element
        "strip_classes": "docutils",

        "syntax_highlight": "short"
    }
    post_body = publish_parts(text, writer_name = "html",
        settings_overrides = docutils_settings)["html_body"]

    return post_body


@phial.page(["posts/*.rst", "drafts/*.rst"])
def post_page(source_file):
    template = phial.open_file("posts/template.htm").read()

    frontmatter, content = phial.parse_frontmatter(source_file)
    frontmatter["is_draft"] = source_file.name.startswith("drafts/")

    # Use docutils to render the restructured text
    post_body = render_rst(content.read())

    # Use mustache to plug everything into the template
    renderer = pystache.Renderer()
    content = renderer.render(template, frontmatter, {"body": post_body})

    return phial.file(
        name=phial.swap_extension(source_file.name, ".htm"),
        content=content,
        metadata=frontmatter or {})

@phial.page(depends_on=post_page)
def main_page():
    template = phial.open_file("index.htm")

    date_from_file = lambda f: datetime.datetime.strptime(f.metadata["date"], "%B %d, %Y")
    sorted_posts = sorted(phial.get_task(post_page).files, reverse=True, key=date_from_file)

    # Clean up the metadata a little
    for i in sorted_posts:
        i.metadata["description"] = render_rst(i.metadata["description"])
        i.metadata["link"] = i.name

    # Use mustache to plug everything into the template
    renderer = pystache.Renderer()
    posts_metadata = [i.metadata for i in sorted_posts if not i.metadata["is_draft"]]
    content = renderer.render(template.read(), {"posts": posts_metadata})

    return phial.file(name="index.htm", content=content)

if __name__ == "__main__":
    phial.process()
