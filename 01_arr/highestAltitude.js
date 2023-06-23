const largestAltitude = function (gain) {
  // let prefix=[0];
  // for(let i=0; i<gain.length; i++){
  //     prefix.push(prefix[i] + gain[i])
  // }
  // return Math.max(...prefix);
  // TC: O(n), SC: O(1)
  let curr = 0;
  let highest = curr;
  for (let i = 0; i < gain.length; i++) {
    curr += gain[i];
    highest = Math.max(highest, curr);
  }
  return highest;
};
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
