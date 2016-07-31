title: Principles of Building a Simple Site
date: July 30, 2016
description: >
    Simple websites can be very useful: a site for your cat pictures and thoughts, a blog for your company, a portfolio for advancing your career, etc. I've made a bunch and I have some lessons to share.
...

Simple websites can be very useful: a site for your cat pictures and thoughts, a blog for your company, a portfolio for advancing your career, etc.

I've made a bunch of simple sites and I have some lessons to share [#some_of_my_sites]_. But first, I've got a question for you: do you care more about completing a good website, or do you care more about something else (like learning)?

Don't make this decision too lightly. For example, if you're building a portfolio for yourself, you should probably only care about completing a good website (it's a tool for advancing/starting your career after all). If you want to focus on something else, make sure you'd be OK with not finishing the website.

If you *are* interested in making the best website you can without running out of steam before completing it, try following these principles:

#. **Avoid learning new things where possible.** Learning takes time and energy, and will burn you out. If given the choice of two tools, go with the one you know how to use already.
#. **Do not generalize.** Lots of people try to create "a general tool for building websites", and then try to use that tool to make their website [#phial]_. You'll very likely burn yourself out making the tool. Try writing a script that suits your exact needs instead (`example <https://github.com/Khan/engblog/blob/master/src/app.py>`__).
#. **Be realistic about who needs to grok your code.** If you're building a personal website, only you need to be comfortable hacking on it; so go ahead and use three different languages and ten other tools to build your website if you're skilled with all of them (`example <https://github.com/brownhead/johncs.com/blob/master/Makefile>`_).
#. **Keep the website's goal in mind.** If you just want a place to host your thoughts in a blog format, don't get caught up worrying about design too much. If you're building a portfolio, make sure your design conveys what you want it to (ex: "I've made a lot of cool stuff!" or "the things I've built have millions of users").
#. **Make a static site.** By this I mean make a site that could be hosted on GitHub Pages or a similarily simple service. Sometimes this isn't possible, but building and maintaining something besides a static site is way more difficult, so try really hard to Keep It Static Silly.

I haven't gotten around to adding comments to this blog yet, but feel free to send me your throughts or ask me questions on `twitter <https://twitter.com/itsjohncs>`_.

.. [#some_of_my_sites]
	
	Most of the simple websites I've built aren't up anymore, but here's three live ones:

	* `Khan Academy's engineering blog <http://engineering.khanacademy.org>`_ (`source <https://github.com/khan/engblog>`__)
	* `This website <http://johncs.com>`_ (`source <https://github.com/brownhead/johncs.com>`__)
	* `My portfolio <http://johnsullivan.name>`_ (`source <https://github.com/brownhead/brownhead.github.io>`__)

.. [#phial] `Phial <https://github.com/brownhead/phial>`__ is my attempt at building a static site generator when I really should've been concentrating on just building my blog. There's a shockingly large `list of static site generators <https://www.staticgen.com/>`_ that demonstrates how often people want to violate this principle.
