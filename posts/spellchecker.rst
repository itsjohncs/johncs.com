title: Typos in search queries at Khan Academy
date: April 11, 2015
description: >
    Another fun problem I got to solve while interning at `Khan Academy <https://www.khanacademy.org/careers/interns>`_: how can we provide good search results for mispelled queries.
...

One year ago, searching for *polinomials* on `Khan Academy's search page <https://www.khanacademy.org/search>`_ would give you no results. If you typed the same thing into Google you'd be efficiently and politely corrected.

.. image:: /images/showing_results_for.png
    :alt: Google's "Showing results for..." feature.
    :width: 75%
    :align: center

I didn't have any illusions of making a solution as good as Google's, but I figured I could improve things for a significant number of users anyways [#reach_research]_.

The first thing I did was see if there was some library or tool that we could use to do some simple spellchecking. Khan Academy runs on Google App Engine's Python platform, so I needed a pure-Python library (`installing CPython extensions is not allowed <https://cloud.google.com/appengine/docs/python/#Python_Pure_Python>`_).

`Whoosh <https://pypi.python.org/pypi/Whoosh/>`_ was a good candidate, but it wasn't as memory efficient as I wanted [#whoosh_memory]_. Integrating Whoosh with Google App Engine also looked error-prone. After looking around some more and not finding anything super useable, I decided to try something crazy.

I decided to build my own pure-Python spell checker.

.. image:: /images/wat.png
	:alt: Wait, what?
	:align: center

I was expecting my mentor and others to balk at the idea (I was an intern during this time). But all I received were encouraging nods, so off I went.

To get things up and going quickly, I chose to follow a simple brute force algorithm like the one Peter Norvig describes in `his awesome blog post <http://norvig.com/spell-correct.html>`_. Soon I had something running that worked well and was super fast. There was a problem though.

Storing our English words in a Python ``dict`` consumed about 18 MB of space [#benchmarking]_. Since my hope was that this code could run on all our frontend instances and work for all languages, our infrastructure team and I weren't super excited by this.

.. image:: /images/oh-hell-no.gif
	:alt: Oh hell no.
	:align: center

To reduce memory I first tried using `Python's array module <https://docs.python.org/2/library/array.html>`_ to build my own immutable hash table. This did indeed bring our memory usage down but made spellchecking take several seconds per query.

The loss of speed came from doing way more things in Python code instead of CPython's super-fast hash table implementation. So I had to give up on my plans for an awesome `succinct trie <http://stevehanov.ca/blog/index.php?id=120>`_ implementation and instead went hunting through the standard library to find the best native solution available.

Thus I arrived at the binary search implementation in the `bisect module <https://docs.python.org/2/library/bisect.html>`_ of Python's standard library.

The idea is simple. Store a hash of each word in a sorted array (creating hashes with the quick ``hash()`` built-in), and then do binary search on that array.

This ends up being fast enough for all queries and consumes less then 2 MB to store the sorted array. Best of all, it works.

.. image:: /images/khan-academy-correction.png
	:alt: Screenshot of the spell checker working on Khan Academy
	:align: center
	:width: 75%

.. [#reach_research] I found that the 28% of the least frequent 16,000 queries and 18% of the most frequent 16,000 queries had typos within edit distance 2 of a known common word. I defined "common word" by creating a single dictionary from some freely licensed english dictionaries and all of Khan Academy's content. This was part of my preliminary research and was done to check that a autocorrecter was a useful feature.

.. [#whoosh_memory] I came to this conclusion by auditing the code, which is (of course) not nearly as accurate as actually running benchmarks. If you're familiar with Whoosh and think I came to the wrong conclusion, please let me know.

.. [#benchmarking] Once I got something working at all, I invested time into making a script that would give me metrics on our speed, memory usage, and accuracy. `Pympler <https://github.com/pympler/pympler>`_ was used to get the size of the dictionary implementations as well as the max memory usage when running the algorithm.
