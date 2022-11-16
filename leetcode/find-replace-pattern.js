/*
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
*/


var findAndReplacePattern = function (words, pattern) {
    let patSet = new Set(pattern)

    //Creates a map of the word and the pattern, then builds rebuilds a word based on the map to check if one of the map characters has been changed from looping through the word
    function getMap(word) {
        let m = new Map()
        let res = ''
        for (let i = 0; i < word.length; i++) {
            let ltr = word[i]
            let pat = pattern[i]
            m.set(pat, ltr)
        }
        for (const ltr of pattern) {
            res += m.get(ltr)
        }
        return res
    }

    if (pattern.length == 1) {
        return words
    }

    // Filters out any words that 1) are not the same set size and 2) the word built from the map does not match the current word.
    return words.filter(word => {
        //Compare the set size of the word to the pattern to prevent edge cases of when a word has all the same letter.
        if (new Set(word).size == patSet.size) {
            if (getMap(word) == word) {
                return word
            }
        }

    })

};