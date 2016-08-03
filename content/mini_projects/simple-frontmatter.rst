title: Simple Frontmatter Parser
date: August 3, 2015
url: https://github.com/brownhead/simple-frontmatter
...

I wonder how many people have implemented a simple frontmatter parser... Judging by the volume of static site generators out there I bet there's a bunch.

I made one for `Phial <https://github.com/brownhead/phial>`_ that was totally over-engineered awhile ago, but then for the `KA Engineering blog <http://engineering.khanacademy.org>`_ and `this site <http://johncs.com>`_ I went with a simpler version. I doubt it'd be useful, but just in case I figured I should release it under the UNLICENSE.

Here's a document that the parser could handle:

.. code-block::

    # post.rst
    title: The best post ever
    author: John
    ...

    This really is the best post ever
    =================================

    I assure you.

And here's some code that uses the parser:

.. code-block:: pycon

    >>> import simple_frontmatter
    >>> with open("post.rst") as f:
    ...     frontmatter, contents = simple_frontmatter.load(f)
    ...
    >>> frontmatter
    {'title': 'The best post ever', 'author': 'John'}
    >>> contents
    '\nThis really is the best post ever\n=================================\n\nI assure you.\n'
