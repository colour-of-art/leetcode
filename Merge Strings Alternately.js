/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if (word1.length === 0 && word2.length === 0){
        return "";
    }

    if (word1.length === 0 && word2.length != 0)
        return word2;

    if (word1.length != 0 && word2.length === 0){
        return word1;
    }

    return word1[0] + mergeAlternately(word2, word1.substring(1))
};
