poppycock.js 
=========================

[*pop•ee•kok*]
--------------


A Lorem Ipsum text generator with flavors. Generate poppycockish bullcrap quotes from any of the following flavors:

* Lorem Ipsum
* Batman

Supported browsers
------------------

Modern browsers and IE9+.

Quick start
-----------

1. Link to poppycock.js: `<script src="/src/poppycock.js" type="text/javascript"></script>`
2. Add the data-attribute `data-poppycock` with options you want to an element to fill it with placeholder text: `<span data-poppycock="1 paragraph"></span>`

Flavors
-------

There are two text flavors available, lorem (standard Lorem Ipsum) and batman (Batman quotes). lorem will be used if nothing else is specified. To use batman instead, add `batman` as an option: `<span data-poppycock="2 paragraphs batman"></span>`.

Options
-------

You can add placeholder text as individual words (`w`, `word` or `words`), sentences (`s`, `sentence` or `sentences`) or paragraphs (`p`, `paragraph` or `paragraphs`). Add any number to specify the number of words/sentences/paragraphs. The order of options is not important.

* `<span data-poppycock="5 words"></span>` produces 5 words of Lorem Ipsum text
* `<span data-poppycock="batman 10 s"></span>` produces 10 sentences of Batman quotes
* `<span data-poppycock="paragraph 3"></span>` produces 3 paragraphs of Lorem Ipsum text (5-10 sentences per paragraph), each wrapped in `<p></p>`. 

If no options are specified the default is one paragraph of Lorem Ipsum text.

API
---

A global `poppycock` object is added to `window` which you can use to programmatically generate text:

`poppycock.gimmie({ flavor: batman, style: 'sentence', count: 2 });`
