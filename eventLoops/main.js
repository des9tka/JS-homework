// dayStatus = '';
// function morningDay(dayStatus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dayStatus) {
//                 console.log('its time to wake up!!!!!')
//                 resolve(dayStatus = 'morning');
//             } else {
//                 console.log('Its not morning yet!!!')
//                 reject('night');
//             }
//         }, 800)
//     })
// }
//
// function midDay(dayStatus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dayStatus === 'morning') {
//                 console.log('All right,  its time fo midday')
//                 resolve(dayStatus = 'midday')
//             } else {
//                 console.log('your are still dreaming!!!')
//                 reject('still not morning')
//             }
//         }, 300)
//     })
// }
//
// function eveningDay (dayStatus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dayStatus === 'midday') {
//                 console.log('Night is soon, time to sleep!!!')
//                 resolve(dayStatus = 'night')
//             } else {
//                 console.log('you should live midday firstly!')
//                 reject('still not midday!!!')
//             }
//         }, 100)
//     })
// }
//
// async function myDay (dayStatus) {
//     try { const morning = await morningDay(dayStatus);
//         console.log('i woke up!!!');
//
//         const midday = await midDay(morning);
//         console.log('it midday!!!');
//
//         const evening = await eveningDay(midday);
//         console.log('its evening!!!');
//     } catch (e) {
//         console.warn('buuuggg');
//     }
// }
//
// myDay(true);
//
//
// morningDay(true)
//     .then(dayStatus => {
//         console.log("i woke up!!!")
//         return midDay(dayStatus)
//     })
//     .then(dayStatus => {
//         console.log('its midday!!!')
//         return eveningDay(dayStatus)
//     })
//     .then(dayStatus => {
//         console.log('its evening!!!')
//     })
//
// let first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 600)
// });
//
// let sec = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 100)
// });
//
// let third = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3)
//     }, 200)
// })
//
// Promise.race([first, sec, third])
//     .then(value => {
//         console.log(value);
//     })
//
// Promise.allSettled([first, sec, third])
// .then(value => {
//     console.log(value);
// })