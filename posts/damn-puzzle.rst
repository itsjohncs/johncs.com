title: Solving a wooden puzzle
date: April 27, 2015
description: >
    Last week a mysterious double-sided puzzle appeared next to the kitchen at `Khan Academy <https://www.khanacademy.org/>`_.
is_draft: true
...

Last week a mysterious double-sided puzzle appeared at `Khan Academy <https://www.khanacademy.org/>`_.

.. image:: /images/mysterious-puzzle.jpg
    :alt: A picture of the mysterious puzzle
    :width: 75%
    :align: center
    :target: /images/mysterious-puzzle.jpg

To solve the puzzle you must fit all four pieces inside the recessed area (the pieces will not entirely fill the area). After a few days we found a solution to the easy side [#easy_solution]_ but nobody could figure out the hard one. So five of us began writing our own solvers.

The first question each of us faced was how to represent the positions of the pieces. We were able to lay down a triangular grid on top of each side, but how should the cells be addressed?

Each of us came up with our own answer to this question [#such_coordinates]_. I decided to use a coordinate system that used two perpendicular axes, with the origin at the bottom left.

.. image:: /images/triangular-grid.png
    :alt: The triangular grid
    :width: 75%
    :align: center

.. image:: /images/johns-coordinates.png
    :alt: My coordinate system
    :width: 75%
    :align: center
    :target: /images/johns-coordinates.png

I had a problem though, I couldn't figure out how to rotate the pieces once they were placed into my grid. After smashing my head against the problem for awhile and getting nowhere, I gave up and manually input each rotation. This ended up being three rotations per piece (the remaining alignments could be expressed as reflections of one of the rotations).

Now I had to actually write the logic to try every possible configuration.

By this time, Ben Eater's solver was done and ticking away. `His solver <https://www.khanacademy.org/computer-programming/spin-off-of-puzzle/4900481558249472>`_ didn't do any pruning of the search space though (and took some time to check each configuration), so he estimated that the solver would finish in around 2 years. I felt good about my chances of finding a solution before then.

.. image:: /images/eaters-solver.gif
    :alt: Ben Eater's solver
    :align: center

To try and be a little faster I added in some logic to prune large parts of the search space where possible. This worked by laying down a piece at a time, and only trying the other ones if there were no collisions.

For example, first my program would lay down Piece A somewhere. If Piece A collided with a wall, my program would not try laying down Piece B yet, but would instead move Piece A somewhere else.

This ended up working well and soon I had `a solver <https://github.com/brownhead/damn-puzzle/blob/master/boom.js>`_ that could brute force the puzzle in less than a minute.

.. image:: /images/solver.gif
    :alt: My solver
    :width: 50%
    :align: center

Emily finished `her solver <https://github.com/xymostech/wood-puzzle/blob/master/src/Main.hs>`_ around the same time and we were able to confirm our results. **The hard side of the puzzle was unsolvable**.

Clearly there was a very evil puzzle master in our ranks.

.. image:: /images/evil-kitty.gif
    :alt: An evil kitten
    :width: 50%
    :align: center

`Jamie Wong <http://jamie-wong.com/>`_ readily admitted to bringing in the puzzle (though he didn't tell us where he got it). Despite the staggering proof to the contrary though, he was adamant that a solution existed. He said our solvers all shared a fatal flaw.

After a few hints, Emily and I did find the answer [#hard_solution]_. Which was good, because none of us had gotten any work done for a little while and we were starting to feel guilty.

.. [#easy_solution] If you want to spoil it for yourself, here is `a picture of the solved easy side </images/easy-solved.jpg>`_.
.. [#such_coordinates] Ben Eater decided to side-step the issue by drawing the shapes directly onto the screen. Cam Christensen came up with a coordinate system with two axes that formed a 60° angle and he convinced Emily Eisenberg to use the same system. Justin Helps used a screen-based coordinate system like Ben Eater, but tracked all three vertices of each triangle.
.. [#hard_solution] You don't really want me to give you the answer do you? That would be boring.
