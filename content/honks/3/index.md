+++
date = "2022-01-24 21:13:00"
+++

Ever struggle to figure out why that pesky element isn't shrinking despite a psoitive `flex-shrink`? I learned today that the default minimum size of a Flex item is usually `min-content`, [though there's more details of course](https://www.w3.org/TR/css-flexbox-1/#min-size-auto).

You can set `min-width` or `min-height` to `0` to see if that's your problem. Though consider setting a non-zero minimum afterwards, since otherwise you're giving the layout engine permission to shrink your element into non-existance.

I found this out by skimming [the Flexbox spec](https://www.w3.org/TR/css-flexbox-1/) after getting stuck on a problem. For some reason I haven't reached for the CSS spec very often over the years but I hope it'll come to mind more quickly for me in the future.
