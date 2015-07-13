title: "The Python Import System"
date: March 31, 2014
description: >
    I made a presentation at Khan Academy on a few good things to know about Python's import system. Here's a writeup of that presentation (this is written mostly as a reference, sorry for the dryness).
...

I made a presentation at Khan Academy on a few good things to know about Python's import system. Here's a writeup of that presentation (this is written mostly as a reference, sorry for the dryness).

The slides are available `here <https://docs.google.com/presentation/d/18JO4L9HRY9UJypAW49vj4QnCgl_MoseKxPpE9PKlrg4/edit?usp=sharing>`_.

Vocab Review: Package vs Module
-------------------------------

A Python module is a single file that you can import, a Python package is a collection of modules and packages (`SO answer <http://stackoverflow.com/a/7948504>`_).

For example, if we made a file named ``foo.py`` and then executed ``import foo``, we would be importing a module.

Now if we were to make a directory named ``bar/`` and place two files, one named ``__init__.py`` and the other named ``foo.py``, in that directory, we could then execute ``import bar.foo`` and we would be importing the module ``foo`` from the ``bar`` package. The ``__init__.py`` is important here only because it tells Python that ``bar`` is a package and not just some random directory.

Note: Packages can be Zip Archives
----------------------------------

Instead of containing a package within a directory, you can also store them in zip archives thanks to the `zipimport <https://docs.python.org/2/library/zipimport.html>`_ standard libary shipped with Python since version 2.3. This is very common if you install packages as `eggs <http://stackoverflow.com/a/2051195>`_, which are actually just fancy zip archives.

``sys.path``
------------

``sys.path`` is a list of locations Python will look for packages in when you use ``import`` or ``from``. The list will be scanned front-to-back, and the first module it finds with the name you're looking for will be used (which can be problematic sometimes).

When you modify the ``PYTHONPATH`` environmental variable, you're indirectly adding to ``sys.path`` (it's hard for you to know ahead of time where in the list your paths will be placed though).

The site-packages Directory
---------------------------

The ``site-packages/`` directory is where your third-party Python packages and modules are likely to live. ``pip`` and ``easy_install`` installs things into this directory, and ``virtualenv`` creates a new ``site-packages`` directory as one of its primary methods of seperating the packages in the virtual environment from the packages on the rest of your system.

The location of this directory varies from system to system (and of course is changed when you're in a virtual environment), but it's nearly always called ``site-packages/`` so whenever I'm helping someone with import-related problems I usually just do a find on this name to get my bearings. I might also use the ``__file__`` attribute (`info on this attribute <http://stackoverflow.com/a/9271479>`_) of an imported module to find it as well.

The `site <https://docs.python.org/2/library/site.html>`_ standard module takes care of adding your ``site-packages`` directory to your path. The module also descends into it and handles any ``.pth`` files within.

``.pth`` files
--------------

These files are read by the ``site`` module and the paths contained within are added to ``sys.path``. If you visit your own ``site-packages`` directory on your installation you're sure to see many of these such files.

``.pth`` files are very handy, and you should definitely consider using them instead of modifying your ``PYTHONPATH`` if you'd like the change to be permanent.

You can also add arbitrary Python into these files by prefixing an ``import`` statement to the line. This feature doesn't seem to be documented but is leveraged by a few libraries such as ``easy-install``.

Extending the Import System
---------------------------

If your needs are complex, you might want to take advantage of the hooks added by `PEP 302 <http://legacy.python.org/dev/peps/pep-0302/>`_ to extend the import system. You can also extend or reimplement the ``site`` module yourself (I did this while creating `Super Zippy <https://github.com/brownhead/superzippy>`_). Finally, you can do super crazy things like overriding ``__import__``. If you want to do it you can probably get Python to let you do it.
