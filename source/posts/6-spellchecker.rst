title: Creating a spell checker in Python.
date: August 30, 2014
description: >
    How I wrote a performant spell checker entirely in Python.
...

I wanted `Khan Academy's search page <https://www.khanacademy.org/search>`_ to be able to automatically correct simple typos (ex: *factorinn* to *factoring*). Not wanting to embark on something epic without some data to back me up, I did some quick research. I found that 28% of the least frequent 16,000 queries and 18% of the most frequent 16,000 queries to our search page had typos that we could fix. So it seemed like this feature would benefit a fair number of users.

Doing it ended up being pretty tricky though. We use Amazon CloudSearch to do the heavy lifting for us, and it doesn't have support for any kind of spell checking. Therefore if we wanted to do this, we'd have to either implement our own solution within the Google App Engine sandbox, or ship off to some external service.

Rolling our own spellchecker seemed like a pretty awful idea, so I thought long and hard about how we could best use an external service. Nothing I tried ended up being very reasonable though. Getting locked into a spell checking solution that wasn't very flexible wasn't very apepaling either, since I had big plans for it.

Google App Engine has support for Java, Go, and PHP, which all had considerably more performant setups than Python. We don't use seperate modules very much in our webapp though, and there'd be a lot of overhead to get it going. So in order to get something up and going that would serve our needs without draining a ton of time, I made the decision to implement it in Python.

With that in mind

All the major search engines will figure out what you mean when you make a typo like *factorinn quadratics*. They seem to implement this "Searching instead for..." feature 

I wanted the search page at Khan Academy to be able to check users' queries for spelling errors.

The search page at Khan Academy will check your query for spelling errors (ex: try `searching for *factor quadrattics* <https://www.khanacademy.org/search?page_search_query=factor+quadrattics>`_).
