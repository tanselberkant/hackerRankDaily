// Task
// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

function vowelsAndConsonants(s) {    
    let newString = '';
    let collecter = '';
    
    for(let i = 0; i < s.length; i++) {        
        if(s[i] === 'a' || s[i] === 'o' || s[i] === 'e' || s[i] === 'i' || s[i] === 'u'){
            newString = newString + s[i]            
        } else {
            collecter = collecter + s[i]            
        }                 
    }
    let finalString = newString + collecter;
    for (let i = 0; i < finalString.length; i++) {
        console.log(finalString[i])
    }
    
}
