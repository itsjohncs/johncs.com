title: "Haskell monads and the nest of lies"
date: May 3, 2019
description: The ``IO`` monad in Haskell works by assuming our universe is in a simulation and that your tiny computer can capture the entire state of the universe and play it forwards in real time.
...

The ``IO`` monad in Haskell works by assuming our universe is in a simulation and that your tiny computer can capture the entire state of the universe and play it forwards in real time.

This is of course a lie, but I'm not the one doing the lying. In the purely functional world of Haskell (separate from the imperative world of processors), this is exactly how the IO monad is supposed to work.

Bear with me for a sec.

The Abstraction We All Know and Love
====================================

You've probably heard that the ``IO`` monad represents an action to be executed later. Here's a paragraph from `Learn You a Haskell for Great Good! <http://learnyouahaskell.com/input-and-output>`__ saying exactly that:

    We can read the type of putStrLn like this: putStrLn takes a string and returns an I/O action that has a result type of () […] An I/O action is something that, when performed, will carry out an action with a side-effect […] and will also contain some kind of return value inside it.

This might be the extent of your understanding of the ``IO`` monad and that's totally fine. It's a fairly serviceable abstraction: ``IO a`` is a reference to a function, and that function returns a value of type ``a``. Cool cool, great great.

The Sky Darkens, Thunder Clashes
================================

But hold on a sec, if ``IO a`` is a reference to a function, what parameters does the function take? If it doesn't take any parameters, wouldn't any two invocations of a function be equivalent? We are pure and fancy and Haskell isn't supposed to let a function return different things if it's given the same arguments. So how can two ``getLine`` calls return two different things?

Well there is a parameter, and it's really weird: ``IO a`` expands out to essentially ``World -> (World, a)``.

What is this ``World`` type you ask? Well it's that thing I mentioned in the first sentence of this blog post: a snapshot of the entire universe including the user, the computer its running on, and the small hamster at the center of the sun.

Don't Call Me Surely
====================

This solves everything very cleanly.

Now when the program ``main = getLine >>= print`` is executed, all we have to do is grab a snapshot of the universe and play it forwards to determine what the real user is going to type in and when they're going to do so. Then we can sleep for a bit while the user finishes typing (we of course don't have to actually listen for those keystrokes, since our simulated user already gave us all the information we need), and then print out what the user types once they hit enter.

Easy peasy.

Enough Fooling Around What Is It Actually?
==========================================

So this is truly what ``World`` represents but it's a representation designed to trick the optimizer. Haskell *does* guarentee that two invocations of the same function with the same arguments will return the same value. We therefore need to fabricate an argument, otherwise Haskells optimizer can replace two such invocations with a single one.

"The world" is the fabricated argument. We pass it around from ``IO`` function to ``IO`` function, Haskell's optimizer can't be sure that one call to ``getLine`` is going to get the same ``World`` value as another call (it thinks it might be changing as we "play the simulation forward"), and so it's forced to leave them as separate invocations.

Once our code has made it through the optimizer we actually go and discard the ``World`` value though, and instead just make boring syscalls to get input from the user, print stuff to the terminal, or what have you.

`The paper that first introduced the IO monad <http://homepages.inf.ed.ac.uk/wadler/papers/imperative/imperative.ps>`__ actually does a great job explaining way the ``World`` value is necessary, and I thoroughly encourage you to read it.

In fact, I'm not going to go into the nitty gritty because that paper does a good job. Therefore… bye!
