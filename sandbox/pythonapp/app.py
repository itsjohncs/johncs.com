"""A script that builds "packages" for each of the blog's content pages.

This is just one stage of building the site. This script is responsible for creating the unminified
HTML for each page of the site, as well as collecting and describing the "inline dependencies" of
each page (an inline dependency is a CSS or JS file that should be inlined in the page).
"""

import glob
import json
import os
import sys

import pystache

from post import Post

POST_TEMPLATE = open("./templates/post-page.htm", "rb").read().decode("utf-8")


def render_post_page_template(post):
    """Renders a single post page template.

    This will output a template that our gulp-app will process. Note that we're also using a
    template in this step, so it's a template to template compilation...

    Returns: A string or unicode object containing the rendered page.
    """
    template_params = {
        "displayed_post": post.get_metadata(),
        "html_content": post.get_html_content(),
    }
    renderer = pystache.Renderer(missing_tags="strict")
    return renderer.render(POST_TEMPLATE, template_params)


def main():
    # Grab all of the posts and sort them by their published date
    posts = [Post(path) for path in glob.glob("../content/posts/*")]

    # Go through and create all the post pages
    for post in posts:
        package_dir_name = os.path.splitext(post.get_output_name())[0]
        package_dir_path = os.path.join("../build/app-output/packages", package_dir_name)

        # This will error if the directory already exists. This script assumes our output directory
        # has been wiped beforehand, so this is desired.
        os.makedirs(package_dir_path)

        # Render the template
        rendered_post_template = render_post_page_template(post)
        with open(os.path.join(package_dir_path, "template.htm"), "wb") as f:
            f.write(rendered_post_template.encode("utf-8"))

        # Render the package description (see crush.js for the code that reads this)
        package_description = {
            "target": "posts/" + post.get_output_name(),
            "template": "template.htm",
        }
        with open(os.path.join(package_dir_path, "description.json"), "wb") as f:
            # The file will be ASCII encoded (and implicitly UTF-8 encoded)
            f.write(json.dumps(package_description, ensure_ascii=True))


if __name__ == "__main__":
    main()
