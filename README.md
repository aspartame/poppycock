ipsums.js
=========

Lorem Ipsum text generator with different flavors (current flavors are standard Lorem Ipsum and Batman quotes).

Supported browsers
------------------

Modern browsers and IE9+.

Quick start
-----------

1. Link to ipsums.js: `<script src="/src/ipsums.js" type="text/javascript"></script>`
2. Add the data-attribute `data-ipsum` with options you want to an element to fill it with placeholder text: `<span data-ipsum="1 paragraph"></span>`

Flavors
-------

There are two text flavors available, lorem (standard Lorem Ipsum) and batman (Batman quotes). lorem will be used if nothing else is specified. To use batman instead, add `batman` as an option: `<span data-ipsum="2 paragraphs batman"></span>`.

Options
-------

You can add placeholder text as individual words (`w`, `word` or `words`), sentences (`s`, `sentence` or `sentences`) or paragraphs (`p`, `paragraph` or `paragraphs`). Add any number to specify the number of words/sentences/paragraphs. The order of options is not important.

* `<span data-ipsum="5 words"></span>` produces 5 words of Lorem Ipsum text
* `<span data-ipsum="batman 10 s"></span>` produces 10 sentences of Batman quotes
* `<span data-ipsum="paragraph 3"></span>` produces 3 paragraphs of Lorem Ipsum text (5-10 sentences per paragraph), each wrapped in `<p></p>`. 

If no options are specified the default is one paragraph of Lorem Ipsum text.


