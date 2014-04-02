title: "The Python Import System"
date: March 31, 2014
description: >
    asdf
...

Many developers don't possess intimate knowledge of Python's import system. This is as it should be, Python and its tools (like ``pip`` and ``virtualenv``) work hard to make such knowledge unnecessary. There are some details that are very useful to have in the back of your head though, and there's some general knowledge that's pretty necessary.

## sys.path



## The site-packages Directory

There is nearly always a ``site-packages`` directory in ``sys.path``. ``pip`` installs any packages into this directory, and ``virtualenv`` creates a new ``site-packages`` directory as one of its primary methods of seperating the packages in the virtual environment from the packages on the rest of your system.


When you install a Python package with ``pip``, it will be installed in your ``site-packages`` directory.
