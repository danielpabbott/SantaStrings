function countVowels(string) {
	var count = 0;
	var strLen = string.length;
	for (var i = 0; i < strLen; i++) {
		if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ) {
			count++;
		}
	}
	return count;
}

function doubleLetter(string) {
	var letter = '';
	var strLen = string.length;
	for (var i = 0; i < strLen; i++) {
		if (string[i] === string[i + 1]) {
			return true;
		}
	}
	return false;
}

function cannotContain(string) {
	var strLen = string.length;
	for (var i = 0; i < strLen; i++) {
		if (string[i] + string[i + 1] === 'ab' || string[i] + string[i + 1] === 'cd' || string[i] + string[i + 1] === 'pq' || string[i] + string[i + 1] === 'xy') {
			return false;
		}
	}
	return true;
}

function isNaughtyOrNice(string) {
	if (countVowels(string) >= 3) {
		if (doubleLetter(string) === true) {
			if (cannotContain(string) === true) {
				return 'This is a nice string!';
			}
		}
	}
	return 'This string sucks!';
}

function sortAllStrings(array) {
	var niceStrings = 0;
	var naughtyStrings = 0;
	array.forEach(function(string) {
		if (isNaughtyOrNice(string) === 'This is a nice string!') {
			niceStrings++;
		} else {
			naughtyStrings++;
		}
	});
	return console.log('Santa has ' + niceStrings + ' nice strings and ' + naughtyStrings + ' naughty Strings!');
}

module.exports = sortAllStrings;
