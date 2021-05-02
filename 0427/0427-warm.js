// function setCookTime(cookMethod, food, time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('製作完成');
//       resolve(`${cookMethod}完美${food}`);
//     }, time);
//     console.log('準備中');
//   });
// }

// async function start() {
//   let result = await setCookTime('煮', '泡麵', 2000)
//   console.log(result)
// }

// start()

// ----------------------------------------------------------

// Callback
// function setCookTime(cookMethod, food, time, getFood) {
//   setTimeout(()=>{
//     console.log('製作完成')
//     getFood(`${cookMethod}完美${food}`);
//   }, time)
//   console.log('準備中')
// }

// function start() {
//   let result = setCookTime('煮', '泡麵', 2000, (result) => {
//     console.log(result);
//   })
// }

// start();

// ----------------------------------------------------------

// Promise
function setCookTime(cookMethod, food, time) {
  return new Promise((resolve, reject, aaa) => {
    console.log(aaa);
    setTimeout(()=>{
      console.log('製作完成')
      resolve(`${cookMethod}完美${food}`)
    }, time)
    console.log('準備中')
  });
  
}

function start() {
  setCookTime('煮', '泡麵', 2000)
  .then(result => console.log(result));
}

start();