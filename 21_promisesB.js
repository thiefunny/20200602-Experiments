// Moja przeróbka przykładu JabJaba, która nie działa tak samo jak mój kod

// let hasStudied = false;

// const takeTest = new Promise((resolve, reject) => {

//         if (hasStudied) {
//             resolve("studied");
//         } else {
//             reject("No, you partied too much.")
//         }
//     })


// const applyJob = new Promise((resolve, reject) => {
//         if (true === false) {
//             resolve("You have the job!");
//         } else {
//             reject("Invalid License")
//         }
//     })


// takeTest
//     .then(result => {
//    console.log(result)
//         return applyJob
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => console.log(result))

// ---------------------------------------------------------------------------------


// Jabjab example

// let hasStudied = true;

// const takeTest = _ => {
//     return new Promise((resolve, reject) => {
//         const license = {
//             name: 'Registered Nurse License',
//             year: 2018
//         }
//         if (hasStudied) {
//             resolve(license);
//         } else {
//             reject("No, you partied too much.")
//         }
//     })
// }

// const applyJob = (data) => {
//     return new Promise((resolve, reject) => {
//         if (data.year === 2018) {
//             resolve("You have the job!");
//         } else {
//             reject("Invalid License")
//         }
//     })
// }

// takeTest()
//     .then(result => {
//    return applyJob(result)
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => console.log(result))

