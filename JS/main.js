 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyC459JmjV6bYNlqbq0eHcY9TLjzn_Ry9A4",
    authDomain: "form-bizence.firebaseapp.com",
    databaseURL: "https://form-bizence.firebaseio.com",
    projectId: "form-bizence",
    storageBucket: "form-bizence.appspot.com",
    messagingSenderId: "482591748603",
    appId: "1:482591748603:web:0bde5131d3812fd79bdb5e",
    measurementId: "G-EYRB4SYM3K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore =firebase.firestore();

  const  subBtn=document.querySelector('#submit');

  let name = document.querySelector('#name');
  let companyname = document.querySelector('#companyname');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let description = document.querySelector('#description');
 
   const db =firestore.collection("form-Bizence");
    subBtn.addEventListener('click',function(){
      let name= name.value;
      let companyname =companyname.value;
      let email =email.value;
      let phone= phone.value;
      let description = description.value;

      db.doc().set({
         name:name,
         companyname: companyname,
         email: email,
         phone:phone,
         description: description
      }).then (function(){
        console.log('Data Saved');
      })
      .catch(function(error){
        console.log('Error');
      })
    })