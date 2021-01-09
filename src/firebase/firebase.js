import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
//import 'firebase/storage';  // If using Firebase storage


const firebaseConfig = {
    apiKey: "AIzaSyDraFkOb2tAhyow-FeVJHVEPhDhh6Eacq4",
    authDomain: "expensify-930ea.firebaseapp.com",
    projectId: "expensify-930ea",
    storageBucket: "expensify-930ea.appspot.com",
    messagingSenderId: "832415843061",
    appId: "1:832415843061:web:7f5e06c6a493b3bf54bbbc"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const onValueChange = database.ref().on('value', (snapshot) =>  {
    const value = snapshot.val();
    const {name} = value;
    const {title, company} = value.job;
    console.log(`${name} is a ${title} at ${company}`);
},(e) => {
    console.log('error',e);
})

setTimeout(() => {
    database.ref('job/title').set('Manager');
}, 3000)
// database.ref().set({
//     name: 'Tarek HATEM',
//     age: 38,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Paris',
//         country: 'France'
//     }
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Monaco'
// })
// database.ref('isadult').remove()
// .then(() => {
//     console.log('removed');
// })
//.then(() => {
//     console.log('successfully saved data.');
// }).catch((e) => {
//     console.log(e);
// });
// console.log('after first data insert');
// database.ref('age').set(28).then(() => {
//     console.log('age successfully changed');
// }).catch((e) =>{
//     console.log('error:' + e);
// });
// database.ref('location/city').set('Lyon');
// database.ref('attributes/').set({
   
//      height: 183,
//         weight: 78
// })

