const checkIfPangram = function (sentence) {
  // set approach. TC: O(1), SC: O(n)
  let set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    set.add(sentence[i]);
  }
  return set.size === 26;

  // let alphabetObj={};
  // for(let i=0; i< sentence.length; i++){
  //     alphabetObj[sentence[i]]=0
  //     if(sentence[i] in alphabetObj){
  //         alphabetObj[sentence[i]]+=1
  //     }
  // }
  // return Object.keys(alphabetObj).length===26;
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
