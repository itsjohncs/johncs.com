title: "Intelligently Shortening Text"
date: May 18, 2014
description: >
    I designed an algorithm to intelligently shorten the highlighting text (which shows context for each search result) on Khan Academy's search page.
...

.. role:: red-bold

.. role:: raw-html(raw)
    :format: html

Our search page at Khan Academy displays highlighting information to provide context for our results. Our full-text search engine gives us the highlighting text, but it doesn't provide a way to reliably control the length of the text. The end result can be undesirable. Check out this screenshot of our search page:

.. image:: /images/highlighting_before.png
    :alt: A screenshot of Khan Academy's search results.
    :align: center
    :width: 75%

6 lines of text for a single result might be too much... Shrinking it in such a way that the highlighting is still useful is difficult though. To get a clearer idea of the problem, let's poke at some example text:

.. parsed-literal::

    From this experiment we can make a key observation: The values in each of
    the slices are equal to the the label on the slice, plus or minus some
    **multiple** of C. This means the difference between any two values in a
    slice is some **multiple** of C.

This is too large for us to display directly to the user, but how could we shorten it?

To start off, let's say that 125 characters is our "optimal" length (I chose that pretty arbitrarily). Let's also say that anything less than 80 characters is probably too short, and anything more than 150 is too long. With those numbers in mind, what do you think the optimal shortened version of the above text is?

I'd say the second part of the first sentence, after the colon, because it's close to the target length, it has a highlighted term in it, and it's an entire thought.

.. parsed-literal::

    The values in each of the slices are equal to the the label on the slice,
    plus or minus some **multiple** of C.

A way we could figure this out is by first creating a list of "stop points" in the text. We want these stop points to be the beginning of a clause, but since that's a hard thing to detect in code we can approximate it by declaring that stop points are the first alphanumeric character after a non-alphanumeric character and some whitespace. We'll also say that the beginning and end of the text are stop points.

So if we annotated the stop points in our example text we'd get:

.. parsed-literal::

    :red-bold:`\|`\From this experiment we can make a key observation: :red-bold:`\|`\The values in each
    of the slices are equal to the the label on the slice, :red-bold:`\|`\plus or minus some
    **multiple** of C. :red-bold:`\|`\This means the difference between any two values in a
    slice is some **multiple** of C.\ :red-bold:`\|`

Each stop point represents a possible start or end point for our result. So our search space is just every combination of two stop points. Some strings we will look at include:

* ``From this experiment we can make a key observation:``
* ``The values in each of the slices are equal to the label on the slice,``
* :raw-html:`<tt>The values in each of the slices are equal to the label on the slice, plus or minus some <b>multiple</b> of C.</tt>`

The total number of strings we'll look at can be calculated by evaluating ``X choose 2`` (where ``X`` is the number of stop points). So in our case, we have ``5 choose 2`` which is 10.

Not all stop points are created equal however (as you may have noticed). We'd prefer to stop at the end of a sentence than in the middle of one for example. To represent this notion, we have the idea of "preferred" stop points. Since it's also difficult to detect the ends of sentences, we'll say a preferred stop point is one with a capital letter following it. The beginning and end of the text are also preferred.

So if we annotated only the preferred stop points in our example text we'd get:

.. parsed-literal::

    :red-bold:`\|`\From this experiment we can make a key observation: :red-bold:`\|`\The values in each
    of the slices are equal to the the label on the slice, plus or minus some
    **multiple** of C. :red-bold:`\|`\This means the difference between any two values in a
    slice is some **multiple** of C.\ :red-bold:`\|`

Now that we have our vocab in place, we can find our answer. To do so, we'll look at each string in our search space and throw out every string that is outside of our min and max lengths (which we set at 80 and 150 earlier). This leaves us with:

* ``From this experiment we can make a key observation: The values in each of the slices are equal to the the label on the slice,``
* :raw-html:`<tt>The values in each of the slices are equal to the the label on the slice, plus or minus some <b>multiple</b> of C.</tt>`
* :raw-html:`<tt>This means the difference between any two values in a slice is some <b>multiple</b> of C.</tt>`
* :raw-html:`<tt>plus or minus some <b>multiple</b> of C. This means the difference between any two values in a slice is some <b>multiple</b> of C.</tt>`

Next, we can throw out any string that doesn't include a highlighted term leaving us with:

* :raw-html:`<tt>The values in each of the slices are equal to the the label on the slice, plus or minus some <b>multiple</b> of C.</tt>`
* :raw-html:`<tt>This means the difference between any two values in a slice is some <b>multiple</b> of C.</tt>`
* :raw-html:`<tt>plus or minus some <b>multiple</b> of C. This means the difference between any two values in a slice is some <b>multiple</b> of C.</tt>`

Finally, we take all of the strings that remain and rank them. We'll rank first on the preferred-ness of the stop points at each end of the result, and then on the proximity of the string's length to the target length.

Regarding the preferred-ness, we'll say that a result with two preferred stop points ranks highest, a result with a single preferred stop point at the beginning is ranked second highest, a result with a single preferred stop point at the end is ranked third highest, and a result with no preferred stop points is ranked fourth highest (aka last).

The first two results have preferred stop points at both ends, so the only thing differentiating them are the lengths, which are 107 and 82 respectively. Since 107 is closest to out target of 125, our final result is:

.. parsed-literal::

    The values in each of the slices are equal to the the label on the slice,
    plus or minus some **multiple** of C.

This algorithm will break down under certain situations (ex: all the possible results are too short), but the edge cases end up being simple to handle. The same screenshot that we started with, when this algorithm is applied, becomes:

.. image:: /images/highlighting_after.png
    :alt: A screenshot of Khan Academy's search results.
    :align: center
    :width: 75%
