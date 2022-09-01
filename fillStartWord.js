const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word == null || undefined) {
        return undefined
    } else if (startWord === word.slice(0,startWord.length)){
        return word
    } else
        return startWord + word

}
module.exports = fillStartWord
