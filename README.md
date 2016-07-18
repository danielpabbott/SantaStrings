This exercise was borrowed from Advent of JavaScript - a very cool set of challenges that you should check out.

Christmas in July - Lights

Santa is keeping himself busy this summer by sorting Christmas decorations from last year. He needs help figuring out which strings in his text file are naughty or nice. Use the strings.txt in the problems below.

Part I

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
Write a function that sorts the strings for Santa.

Part II

Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous. Now, a nice string is one with all of the following properties:

It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
Write a second function that sorts the strings for Santa.
