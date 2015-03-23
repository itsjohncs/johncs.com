title: Creating a spell checker in Python.
date: August 30, 2014
description: >
    How I wrote a performant spell checker entirely in Python.
...

Not too long ago, searching for *polinomials* on `Khan Academy's search page <https://www.khanacademy.org/search>`_ would yield no results instead of showing results for *polynomials*. This was a pretty big problem affecting somewhere between 18% and 28% of queries made to our search page.[#reach_research]_ I really wanted something like Google's "Showing results for..." feature to take care of this sort of situation.

.. image:: /images/showing_results_for.png
    :alt: Google's "Showing results for..." feature.

I knew I wouldn't be able to implement anything as awesome as Google's autocorrect, but I could definitely make a spell checker to cover basic typos.

The first thing I did was see if there was some library or tool that we could use to do the hard parts of autocorrection. Khan Academy runs on Google App Engine's Python platform, so I needed a pure-Python library. `Whoosh <https://pypi.python.org/pypi/Whoosh/>`_ has a pure-Python spell checker implementation inside of it, but its word graphs take up a large amount of memory, and integration with Google App Engine is difficult and ill-supported. After looking around some more and not finding anything terribly useable, I decided to be a little crazy and try to roll my own pure-Python spell checker.

To get things up and going quickly, a simple brute force algorithm like the one Peter Norvig describes in `his awesome blog post <http://norvig.com/spell-correct.html>`_ was chosen.

The first problem I ran into is that storing our dictionary of words in a Python dictionary consumes ~30 MB of space. This is pretty unpleasant, and would only get worse as I added support for other languages. `Python's array module <https://docs.python.org/2/library/array.html>`_ has come to my rescue before in situations like this, and it came through for me again.

The idea is to store a hash of each word in a sorted array (using the ``hash()`` built-in which is super fast), and then use the `bisect module <https://docs.python.org/2/library/bisect.html>`_ to do a very fast binary search on the array.

When an instance is brought up, I hashed each word in our dictionary with Python's superfast ``hash()`` built-in and stuck them all in a big sorted array. Then whenever I wanted to do a lookup I could use the `bisect module <https://docs.python.org/2/library/bisect.html>`_ to do a very fast binary search on the array. This set up was significantly slower than using a native Python dictionary (which are hash tables), but did have the benefit of being extremely memory efficient (2 MB instead of 30 MB), as well as being straightforward to implement and understand.






 So instead, I tried storing our dictionary using `Python's array.array container <https://docs.python.org/2/library/array.html>`_. Because of the nature of the algorithm, I could get away with storing a sorte

Since we wanted to have our already-memory-strained frontend instances do the spell checking, this wasn't a great option.

With that in mind

All the major search engines will figure out what you mean when you make a typo like *factorinn quadratics*. They seem to implement this "Searching instead for..." feature 

I wanted the search page at Khan Academy to be able to check users' queries for spelling errors.

The search page at Khan Academy will check your query for spelling errors (ex: try `searching for *factor quadrattics* <https://www.khanacademy.org/search?page_search_query=factor+quadrattics>`_).

.. [#reach_research] I found that the 28% of the least frequent 16,000 queries and 18% of the most frequent 16,000 queries had typos within edit distance 2 of a known common word. I defined "common word" by training my little sample program based on `Peter Norvig's awesome sample code <http://norvig.com/spell-correct.html>`_ with some dictionaries and all of Khan Academy's content. This was part of my preliminary research and was done to check that a autocorrecter was a useful feature.
