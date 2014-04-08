title: "The Python Import System"
date: March 31, 2014
description: >
    
...

Here are some things related to Python's import system that I think may be useful.

## Vocab Review: Package vs Module

A Python module is a single file that you can import, a Python package is a collection of modules and packages (`SO answer <http://stackoverflow.com/a/7948504>`_).

For example, if we made a file named ``foo.py`` and then executed ``import foo``, we would be importing a module.

Now if we were to make a directory named ``bar/`` and place two files, one named ``__init__.py`` and the other named ``foo.py``, in that directory, we could then execute ``import bar.foo`` and we would be importing the module ``foo`` from the ``bar`` package. We'll get into the signficance of the ``__init__.py`` shortly.

## sys.path

``sys.path`` is a list of locations Python will look for packages in when you use ``import`` or ``from``. The list will be scanned front-to-back, and the first module it finds with the name you're looking for will be used (which can be problematic sometimes).

Many of the items in ``sys.path`` will be directories on your filesystem, but items can also be zip archives thanks to the `zipimport <https://docs.python.org/2/library/zipimport.html>`_ standard libary shipped with Python since version 2.3. This is very common if you install packages as `eggs <http://stackoverflow.com/a/2051195>`_, which are actually just fancy zip archives.

## The site-packages Directory

The ``site-packages/`` directory is where your third-party Python packages and modules are likely to live. ``pip`` and ``easy_install`` installs things into this directory, and ``virtualenv`` creates a new ``site-packages`` directory as one of its primary methods of seperating the packages in the virtual environment from the packages on the rest of your system.

The location of this directory varies from system to system (and of course is changed when you're in a virtual environment), but it's nearly always called ``site-packages/`` so whenever I'm helping someone with import-related problems I usually just do a find on this name to get my bearings.

The `site <https://docs.python.org/2/library/site.html>`_ standard module takes care of adding your ``site-packages`` directory to your path. It also goes into it and handles any ``.pth`` files within.
