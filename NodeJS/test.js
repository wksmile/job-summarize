
setTimeout(()=>{
  console.log(1)
},0);

setImmediate(()=>{
  console.log(2)
});

Promise.resolve().then(()=>{
  console.log(4)
}).then(()=>{
  console.log(6)
}).then(()=>{
  console.log(7);
})

process.nextTick(()=>{
  console.log(3)
});

(()=>{
  console.log(5)
})();

// 5 3 4 6 1 2


/*
 setTimeout(function() {
 console.log(1)
 }, 0);
 new Promise(function executor(resolve) {
 console.log(2);
 for( var i=0 ; i<10000 ; i++ ) {
 i == 9999 && resolve();
 }
 console.log(3);
 }).then(function() {
 console.log(4);
 });
 console.log(5);

 */

//  2 3 5 4 1

var canPermutePalindrome = function(s) {
  if(!s) return false
  let len = s.length
  if(len <= 1 ) return true
  let sArr = s.split('').sort(),
  isRu=false,
  current=[], 
  initalIndex = 0
  for(let i=0; i<len; i++){
      if(sArr[i]!==sArr[i+1]) {
          current = sArr.slice(initalIndex, i+1)
          initalIndex = i+1
          if(!(current.length%2===0)) {
              if(!isRu) {
                  isRu = true
              } else {
                  return false
              }
          }
      }
  }
  return true
};

console.log('canPermutePalindrome', canPermutePalindrome('baa'))



