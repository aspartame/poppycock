ipsums.js
=========

Lorem Ipsum text generator with different flavors (current flavors are standard Lorem Ipsum and Batman quotes).

Supported browsers
------------------

Modern browsers and IE9+.

Quick start
-----------

1. Link to ipsums.js: `<script src="/src/ipsums.js" type="text/javascript"></script>`
2. Add the class `ipsum` to an element to fill it with placeholder text: `<span class="ipsum"></span>`

Flavors
-------

There are two text flavors available, standard Lorem Ipsum and Batman quotes. Lorem Ipsum will be used if nothing else is specified. To use Batman quotes instead, append the `ipsum` class with `-batman`: `<span class="ipsum-batman"></span>`.

Options
-------

You can add placeholder text as individual words, sentences or paragraphs. Append the `ipsum` class with a dash followed by `w` for words, `s` for sentences or `p` for paragraphs and the number of words/sentences/paragraphs you want.

* `<span class="ipsum-w5"></span>` produces 5 words of Lorem Ipsum text
* `<span class="ipsum-batman-s10"></span>` produces 10 sentences of Batman quotes
* `<span class="ipsum-p3"></span>` produces 3 paragraphs of Lorem Ipsum text (5-10 sentences per paragraph), each wrapped in `<p></p>`. 

