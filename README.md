poppycock.js 
=========================

[*pop•ee•kok*]
--------------


A Lorem Ipsum text generator with flavors. Generate poppycockish quotes from any of the following flavors:

* Lorem Ipsum
* Batman
* The Simpsons

Supported browsers
------------------

Modern browsers and IE9+.

Quick start
-----------

1. Link to poppycock.js: `<script src="/src/poppycock.js" type="text/javascript"></script>`
2. Add the data-attribute `data-poppycock` with options you want to an element to fill it with placeholder text: `<span data-poppycock="1 paragraph"></span>`

Flavors
-------

To use a certain flavor you add the appropriate keyword to the `data-poppycock` attribute. 

`<span data-poppycock="2 paragraphs batman"></span>`

Standard Lorem Ipsum (lorem) will be used if nothing else is specified. The following keywords are available:

* lorem
* batman
* simpsons

Options
-------

You can add placeholder text as individual words (`w`, `word` or `words`), sentences (`s`, `sentence` or `sentences`) or paragraphs (`p`, `paragraph` or `paragraphs`). Add any number to specify the number of words/sentences/paragraphs. The order of options is not important.

* `<span data-poppycock="5 words"></span>` produces 5 words of Lorem Ipsum text
* `<span data-poppycock="batman 10 s"></span>` produces 10 sentences of Batman quotes
* `<span data-poppycock="3 paragraphs simpsons"></span>` produces 3 paragraphs of The Simpsons quotes (5-10 sentences per paragraph), each wrapped in `<p></p>`. 

If no options are specified the default is one paragraph of Lorem Ipsum text.

API
---

A global `poppycock` object is added to `window` which you can use to programmatically generate text:

`poppycock.gimmie({ flavor: batman, style: 'sentence', count: 2 });`
