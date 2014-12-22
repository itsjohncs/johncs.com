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

# I'm going to collect the posts so I can put them on the front page. I'm just
# going to store the frontmatter of each post cause that's all I need.
posts = []

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


@phial.page("posts/{}.htm", foreach=["posts/*.rst", "drafts/*.rst"])
def post_page(target, item):
    if not os.environ.get("DRAFTING") and item.startswith("drafts/"):
        return None

    template = phial.open_file("posts/template.htm")

    frontmatter, content = phial.parse_frontmatter(item)

    # Save the frontmatter of the post so we can use it on the main page, also
    # make note of where we're going to put it in the site.
    posts.append(dict(link=target, **(frontmatter or {})))

    # Use docutils to render the restructured text
    post_body = render_rst(content.read())

    # Use mustache to plug everything into the template
    renderer = pystache.Renderer()
    content = renderer.render(template.read(), frontmatter,
        {"body": post_body})

    return content

@phial.page("index.htm")
def main_page():
    template = phial.open_file("index.htm")

    sorted_posts = sorted(posts, reverse = True,
        key = lambda x: datetime.datetime.strptime(x["date"], "%B %d, %Y"))

    # The posts we're going to show on the front page
    displayed_posts = list(sorted_posts)
    for i in displayed_posts:
        i["description"] = render_rst(i["description"])

    # Use mustache to plug everything into the template
    renderer = pystache.Renderer()
    content = renderer.render(template.read(), {"posts": displayed_posts})

    return content

if __name__ == "__main__":
    phial.process()
