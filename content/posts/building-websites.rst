title: Principles of Building a Simple Site
date: July 30, 2016
description: >
    I've made a bunch of simple websites over the years, and from my endless failures I've built up some principles I now follow.
...

I've made a bunch of simple websites over the years [#simple_site]_, and from my endless failures I've built up some principles I now follow:

#. **Avoid learning new things where possible.** Learning takes time and energy, and will burn me out. If given the choice of two tools, go with the one I know how to use already.
#. **Do not generalize.** Whenever I try to create "a general tool for building X", and then try to use that tool to make X [#phial]_, I burn myself out. Just write a script that suits my exact needs instead (`example <https://github.com/Khan/engblog/blob/master/src/app.py>`__).
#. **Be realistic about who needs to grok the code.** If I'm building a personal website, only I need to be comfortable hacking on it; so go ahead and use three different languages and twelve other tools in the build process (`example <https://github.com/itsjohncs/johncs.com/blob/master/Makefile>`_).
#. **Keep the website's goal in mind.** If I just want a place to host my thoughts in a blog format, don't get caught up worrying about design too much (I didn't have a blog for a long time because of this). If I'm building a portfolio, make sure my design conveys what I want it to (`my portfolio <http://johnsullivan.name/>`_ tries to very quickly convey that I've made a lot of things using a lot of different technologies over a long period of time).
#. **Make a static site.** By this I mean make a site that could be hosted on GitHub Pages or a similarily simple service. Sometimes this isn't possible, but building and maintaining something besides a static site is so much more obnoxious, so try really hard to Keep It Static Silly.

.. [#simple_site]

	I don't have a precise definition of a "simple website" for you, but here's some typical examples of them: blogs, portfolios, project homepages, company websites, etc. Sites with no account management, if there's user-generated content it's super minimal (ex: comments on a blog), backends are usually no more than static file servers, etc.

.. [#phial]

	`Phial <https://github.com/itsjohncs/phial>`__ is my attempt at building a static site generator when I really should've been concentrating on just building my blog. There's a shockingly large `list of static site generators <https://www.staticgen.com/>`_ that's a nice reminder that I'm not the only one to get caught in this trap.
