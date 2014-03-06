from phial import *
from docutils.core import publish_parts
import pystache

register_static_page("styles.css")

@page(files = "posts/*.rst")
def post_page(source):
    template = Document("posts/template.htm")

    # Figure out where we want the filename to be on the site (just replace
    # .rst with .htm).
    output_file = os.path.basename(source.file_path)[:-3] + "htm"

    renderer = pystache.Renderer()
    post_body = publish_parts(source.body, writer_name = "html",
        settings_overrides = {"initial_header_level": 2, "strip_classes": "docutils"})["html_body"]
    body = renderer.render(template.body, source.frontmatter,
        {"body": post_body})

    return RenderedPage(body = body, path = "posts/{}".format(output_file))

if __name__ == "__main__":
    process()

# @page(path = "index.htm")
# def main_page():
#     # Grab the index template and parse out the frontmatter
#     source = Document("index.htm")
