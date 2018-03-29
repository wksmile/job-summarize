
setTimeout(()=>{
  console.log(1)
});

setImmediate(()=>{
  console.log(2)
});

Promise.resolve().then(()=>{
  console.log(4)
}).then(()=>{
  console.log(6)
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


