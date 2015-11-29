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
BLOG_INDEX_TEMPLATE = open("./templates/blog-index.htm", "rb").read().decode("utf-8")
RSS_TEMPLATE = open("./templates/rss.xml", "rb").read().decode("utf-8")


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


def create_post_package(post):
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
        "inlined-less": ["post-page.less"],
    }
    with open(os.path.join(package_dir_path, "description.json"), "wb") as f:
        # The file will be ASCII encoded (and implicitly UTF-8 encoded)
        f.write(json.dumps(package_description, ensure_ascii=True))


def create_blog_index_package(posts):
    # TODO(johnsullivan): I can DRY this up. Repeated logic from posts. "Make a package" sounds
    #     like a useful abstraction.

    # Create the "blog index" that lists all the posts
    package_dir_path = "../build/app-output/packages/blog-index"
    os.makedirs(package_dir_path)

    template_params = {
        "posts": [post.get_metadata() for post in posts],
    }
    renderer = pystache.Renderer(missing_tags="strict")
    rendered_template = renderer.render(BLOG_INDEX_TEMPLATE, template_params)
    with open(os.path.join(package_dir_path, "template.htm"), "wb") as f:
        f.write(rendered_template.encode("utf-8"))

    # Render the package description (see crush.js for the code that reads this)
    package_description = {
        "target": "blog-index.htm",
        "template": "template.htm",
        "inlined-less": ["blog-index.less"],
    }
    with open(os.path.join(package_dir_path, "description.json"), "wb") as f:
        # The file will be ASCII encoded (and implicitly UTF-8 encoded)
        f.write(json.dumps(package_description, ensure_ascii=True))


def create_rss_page(posts):
    template_params = {
        "posts": [post.get_metadata() for post in posts],
    }
    renderer = pystache.Renderer(missing_tags="strict")
    rendered_template = renderer.render(RSS_TEMPLATE, template_params)
    with open("../build/app-output/rss.xml", "wb") as f:
        f.write(rendered_template.encode("utf-8"))


def main():
    # Grab all of the posts and sort them by their published date
    posts = [Post(path) for path in glob.glob("../content/posts/*")]
    posts = sorted(posts, key=lambda post: post.published_on, reverse=True)

    # Go through and create all the post pages
    for post in posts:
        create_post_package(post)

    create_blog_index_package(posts)

    create_rss_page(posts)


if __name__ == "__main__":
    main()
