function reverseVowels(str) {
    const vowels = str.split("").filter((el)=>/[aeiou]/gi.test(el)).reverse()
    const modifiedStringArray = str.split("").map((character)=>{
      if(/[aeiou]/gi.test(character)){
        return vowels.shift()
      }
      return character
    })
    return modifiedStringArray.join("")
}