title: "Phial: A framework for building static sites"
date: March 12, 2014
description: >
    I have a few static websites currently under my care. I manage one with `Jekyll <http://jekyllrb.com>`_, another without a static site generator (just raw HTML files), and another (this blog) with a new tool I created named `Phial <https://github.com/brownhead/phial>`_.
...

I have a few static websites currently under my care. I manage one with `Jekyll <http://jekyllrb.com>`_, another without a static site generator (just raw HTML files), and another (this blog) with a new tool I created named `Phial <https://github.com/brownhead/phial>`_.

Why Not Just Use...
-------------------

Like many others, I was wooed by the glory of `Jekyll <http://jekyllrb.com>`_ when it arrived. It was the first SSG I had run across and it sounded perfect compared to hosting a heavy backend to serve a simple website. However, after using Jekyll to deploy a few websites, I don't want to continue using it.

I want to build my static sites in a way that is similar to how I build my dynamic sites. I don't want to have a tool magically plug everything into the right spot and generate the site for me. **I want to build the tool**. Given the `amazingly large number of SSG's out there <http://staticsitegenerators.net/>`_, I don't think I'm alone.

So I set out to create a framework that would allow you to make such a tool.

Philosophy Behind Phial
-----------------------

I want creating a site with Phial to feel very much like creating a site with `Flask <http://flask.pocoo.org/>`_. I've always had a lot of fun working with Flask, and I want Phial to be fun as well.

Take a look at the Flask's "Hello World!" application available on their home page:

.. code:: python

    from flask import Flask
    app = Flask(__name__)

    @app.route("/")
    def hello():
        return "Hello World!"

    if __name__ == "__main__":
        app.run()

The corresponding application with Phial looks like:

.. code:: python

    from phial import page

    @page("index.htm")
    def hello():
        return "Hello World!"

The desire to keep things as simple and straightforward as possible helped me design Phial, and I'm pretty happy with the result. More examples and such can be found on `Phial's GitHub page <https://github.com/brownhead/phial>`_ if you're interested.

State of Phial
--------------

Right now, I'm very happy with Phial and how it is performing. I'm planning on converting all my static sites to use it.

After I'm personally as happy as can be with its performance (to the extent that one can be happy with their own software) I will start writing extensive documentation and examples. After that I will start trying to spread the glory of Phial to everyone.
