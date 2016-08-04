title: tbget
date: August 4, 2015
url: https://github.com/brownhead/tbget
...

Pretty often when I'm looking at some of the logs at Khan Academy, I find a traceback that I want to take a closer look at, but it has been shoved through a JSON parser or ``repr()`` a couple times. So I end up spending a couple minutes just formatting it enough to be readable.

WELL NO MORE!! Look at this absolutely terribly encoded traceback:

.. code-block::

    '{"test_data": "{\\"data\\": \\"$ tools/runtests.py
    \\\\nRUNNING ALL SORTS OF TESTS\\\\nSTUFF IS
    PASSING!!\\\\n^CTraceback (most recent call last):\\\\n
    File \\\\\\"tools/devshell.py\\\\\\", line 145, in
    <module>\\\\n    from devshell_eval import *\\\\n  File \\
    \\\\"/Users/johnsullivan/khan/webapp/tools/devshell_eval.p
    y\\\\\\", line 4, in <module>\\\\n    from
    assessment_items.models import *\\\\n  File \\\\\\"/U sers
    /johnsullivan/.virtualenv/khan27/lib/python2.7/sre_parse.p
    y\\\\\\", line 126, in __len__\\\\n    def
    __len__(self):\\\\nKeyboardInterrupt\\\\n$\\\\n\\",
    \\"type\\": \\"traceback\\"}", "test_result": "aborted"}'

THE TERROR!!! Fortunately I made a script that turns that big blob into something a bit nicer:

.. code-block:: pytb

    Traceback (most recent call last):
      File "tools/devshell.py", line 145, in <module>
        from devshell_eval import *
      File "/Users/johnsullivan/khan/webapp/tools/devshell_eval.py", line 4, in <module>
        from assessment_items.models import *
      File "/U sers/johnsullivan/.virtualenv/khan27/lib/python2.7/sre_parse.py", line 126, in __len__
        def __len__(self):
    KeyboardInterrupt\\\\n$\\\\n\\",
    \\"type\\": \\"traceback\\"}", "test_result": "aborted"}'

Unfortunately I don't think it's possible for my tool to know for sure when a traceback ends using its current strategy, so there's some gunk at the end, but eh.
