title: Different Logger
date: August 13, 2014
url: https://github.com/itsjohncs/different-logger
...

I wanted Python's logging library to give me pretty output and highlight the substituted values. So I made a little library that'd make it do all those things! Here's some output:

.. image:: /images/different-logger-messages.png
    :alt: Various log messages printed by the logger.
    :target: /images/different-logger-messages.png

.. image:: /images/different-logger-exception.png
    :alt: A log message with a stack trace printed by the logger.
    :target: /images/different-logger-exception.png

You don't need to do anything special to use it, just use the Python ``logging`` library like normal (ex: ``logging.error("%s foobars received, expected 17", num_foobars)``).
