
  var firebaseConfig = {
    apiKey: "AIzaSyBLwEOnE__fJfhaRkwpP-M1mPFh362Dkec",
    authDomain: "superb-ship-255913.firebaseapp.com",
    databaseURL: "https://superb-ship-255913.firebaseio.com",
    projectId: "superb-ship-255913",
    storageBucket: "superb-ship-255913.appspot.com",
    messagingSenderId: "633814339012",
    appId: "1:633814339012:web:fb6d185e2066ab17536891",
    measurementId: "G-VV7Y8006T6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$("#submit").click(function()
{
  var email =$("#email").val();
  var password =$("#password").val();

  if(email!= "" && password!= "")
  {
       var result = firebase.auth().singInWithEmailAndPassword(email,password);

       result.catch(function(error)
       {

          var errorCode = error.code;
          var errorMessage = error.message;


          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message: " +errorMessage);


       });
  }
  else
  {
      window.alert("Some Fields are empty")
  } 
});


