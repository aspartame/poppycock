;(function () {
	var _options = {
		flavor: {
			lorem: 0,
			batman: 1
		},
		
		style: {
			paragraph: 0,
			sentence: 1,
			word: 2
		},
		
		flavors: ['lorem', 'batman']
	};
	
	var _data = {	
		words: [ /* Same number of words as array index, up to 10 words */
			/* Lorem Ipsum */
			['Lorem.', 
			'Lorem ipsum.', 
			'Lorem ipsum dolor.', 
			'Lorem ipsum dolor sit.', 
			'Aeque eligendi facilisi eu sed.', 
			'Curabitur elementum accumsan massa id hendrerit.', 
			'Proin auctor turpis at odio dapibus egestas.', 
			'Sed feugiat, ut sodales lectus sapien vitae nunc.', 
			'Cras et risus vestibulum, rutrum eros sed, tristique eros.', 
			'Nunc et arcu quis justo sagittis pretium sed at sem.'],
			
			/* Batman */
			['Batman.', 
			'The Joker.', 
			'Endure, Master Wayne.', 
			'Bruce Wayne, n\'est-ce pas?', 
			'Because he\'s not our hero.', 
			'But a criminal is not complicated.', 
			'He\'s a silent guardian, a watchful protector.', 
			'The night is darkest just before the dawn.', 
			'Some men just want to watch the world burn.', 
			'When Gotham is ashes, you have my permission to die.']
		],
		
		sentences: [ /* Mixed sentences of varying length */
			/* Lorem Ipsum */
			['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Primis quaestio te est, eu duo mandamus iracundia disputationi, nam at omnes labore gloriatur.', 
			'Et mea soleat animal viderer, zril tation tacimates vix ne. Ut epicuri officiis ius, per an inani dicant, his id suas abhorreant reformidans.', 
			'Eu qui utamur copiosae, tale ridens laboramus ei cum.', 
			'In ornatus signiferumque pri, et purto porro laoreet his, usu ea ludus hendrerit signiferumque.', 
			'Iriure moderatius id sea, eirmod apeirian an nec, sea unum malis semper no.', 
			'Vim an fabulas recusabo, in tamquam labitur moderatius his.', 
			'Veritus fuisset quo ex, ei harum ubique graecis mei.', 
			'Commodo constituto at nec, ne novum mentitum electram sed.', 
			'Nam an audiam indoctum rationibus, purto persequeris no qui.', 
			'Aeque eligendi facilisi eu sed.', 
			'Ferri consulatu te usu, nam at nemore percipit elaboraret, option audire in vix.',
			'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
			'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.',
			'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.',
			'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
			'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
			'Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
			'Nullam leo, ac justo nulla a fusce aenean.',
			'Turpis condimentum eget, felis sit vitae cras sit neque tempore, dignissim tempus facilisis. Neque ultrices.',
			'Gravida ut, in duis et vivamus mauris quam.',
			'Magna vitae magnis pulvinar pellentesque, in eros sed mi nulla ac.',
			'Sodales massa quam urna metus, cursus mauris vestibulum nisl dolor in turpis, fames sodales accumsan.',
			'Integer porttitor et, elementum ut, quis eu consectetuer nibh.'],
			
			/* Batman */
			['It\'s not who I am underneath, but what I do that defines me.', 
			'You either die a hero or you live long enough to see yourself become the villain.',
			'He\'s the hero Gotham deserves, but not the one it needs right now.', 
			'Because he\'s not our hero.', 
			'He\'s a silent guardian, a watchful protector.',
			'People are dying, Alfred.',
			'They\'ll hate you for it, but that\'s the point of Batman, he can be the outcast.', 
			'He can make the choice that no one else can make, the right choice.', 
			'When Gotham is ashes, you have my permission to die.', 
			'The night is darkest just before the dawn.', 
			'Some men just want to watch the world burn.', 
			'Why do we fall sir? So we might learn to pick ourselves up.',
			'Bats frighten me, it\'s time my enemies share my dread.', 
			'People need dramatic examples to shake them out of apathy and I can\'t do that as Bruce Wayne.',
			'How can you move faster than possible, fight longer than possible without the most powerful impulse of the spirit: the fear of death.',
			'Theatricality and deception are powerful agents to the uninitiated... but we are initiated, aren\'t we Bruce?',
			'You were excommunicated... by a gang of psychopaths!',
			'I AM the League of Shadows, and I\'m here to fulfill Ra\'s al Ghul\'s destiny!',
			'The shadows betray you, because they belong to me!',
			'My mother warned me about getting into cars with strange men.',
			'So, you came back to die with your city.',
			'But the child... the child of Ra\'s al Ghul made the climb.',
			'My mother named me Talia before she was killed, the way I would\'ve been killed if not for my protector: Bane.',
			'You made some mistakes, Miss Kyle.',
			'We could use some hotter heads around here.',
			'When I spotted you, I was looking for a friend of mine, Bruce Wayne.',
			'Nothing like a little air superiority, isn\'t it?',
			]
		]
	};
	
	function Options() {
		this.flavor = _options.flavor.lorem;
		this.style = _options.style.paragraph;
		this.count = 1;
	};
	
	function Ipsum(options) {
		this.text = function () {	
			if (options.count < 1) { return ''; }
			
			if (options.style === _options.style.word) {
				var wordsLeft = options.count;
				var maxNbrWords = _data.words[options.flavor].length;
				var words = [];
				
				// Add the desired nbr of words (but no more than the maximum available)
				var nbrWordsToAdd = wordsLeft < maxNbrWords ? wordsLeft : maxNbrWords;
					words.push(_data.words[options.flavor][nbrWordsToAdd - 1]);
					wordsLeft -= nbrWordsToAdd;
					
				// If there's more words to add, add a random amount 
				// until we have the exact nbr of words we want.
				while (wordsLeft > 0) {
					nbrWordsToAdd = randomInt(1, wordsLeft < maxNbrWords ? wordsLeft : maxNbrWords);
					words.push(_data.words[options.flavor][nbrWordsToAdd - 1]);
					
					wordsLeft -= nbrWordsToAdd;
				}
				
				words = shuffle(words);
				
				return words.join(' ');
			}
			
			if (options.style === _options.style.sentence) {
				return getRandomSentences(options.flavor, options.count);
			}
			
			if (options.style === _options.style.paragraph) {
				var paragraphs = [];
				
				for (var i = 0; i < options.count; ++i) {
					var nbrSentences = randomInt(5, 10); // 5-10 sentences per paragraph
					paragraphs.push('<p>' + getRandomSentences(options.flavor, nbrSentences) + '</p>');
				}
				
				return paragraphs.join('');
			}
			
			return '';
		};
	};
	
	function getRandomSentences(flavor, count) {
		var totalNbrSentences = _data.sentences[flavor].length;
		var sentences = [];
		var sentenceIndexes = [];
		
		// Put all sentence indexes in an array and randomize them
		for (var i = 0; i < totalNbrSentences; ++i) {
			sentenceIndexes.push(i);
		}
		
		sentenceIndexes = shuffle(sentenceIndexes);
		
		var index;
		
		// Pick an index from the randomized array and add the corresponding sentence, 
		// start over if we want more sentences than available
		for (var i = 0; i < count; ++i) {
			index = sentenceIndexes[i % sentenceIndexes.length];
			sentences.push(_data.sentences[flavor][index]);
		}
		
		return sentences.join(' ');
	};
	
	function applyIpsums() {
		var ipsums = Sizzle('[class^="ipsum"], [class*=" ipsum"]');
		
		for (var i = ipsums.length - 1; i >= 0; --i) {
			var options = extractOptions(ipsums[i].className);
			ipsums[i].innerHTML = new Ipsum(options).text();	
		}
		
	};
	
	function extractOptions(classes) {
		var options = new Options();
		var parts = classes.substring(classes.indexOf('ipsum'), classes.length).split(' ')[0].split('-');
		
		if (parts.length == 1) { return options; }
		
		for (var i = parts.length - 1; i >=0; --i) {
			var part = parts[i];
			
			var flavorIndex = _options.flavors.indexOf(part);
			var styleMatch = part.match(/^([psw])(\d+)$/i);

			if (flavorIndex != -1) {
				options.flavor = flavorIndex;
				
			} else if (styleMatch && styleMatch.length == 3) {
				switch (styleMatch[1]) {
				case 'p': options.style = _options.style.paragraph; break;
				case 's': options.style = _options.style.sentence; break;
				case 'w': options.style = _options.style.word; break;	
				}
				
				options.count = parseInt(styleMatch[2], 10);
			}
		}
		
		return options;
	};

	function shuffle(array) {
	  	var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
	      currentIndex -= 1;

          temporaryValue = array[currentIndex];
	      array[currentIndex] = array[randomIndex];
	      array[randomIndex] = temporaryValue;
	  }

	  return array;
	};
	
	function randomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	};
	
	document.addEventListener('DOMContentLoaded', applyIpsums);
})();

/*
DOMContentLoaded support

Chrome	Firefox (Gecko)			Internet Explorer	Opera	Safari
0.2		1.0 (1.7 or earlier)	9.0					9.0		3.1
*/