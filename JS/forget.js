var firebaseConfig = {
    apiKey: "AIzaSyCcEF0gz33CTEzt9UOGTq6s4hs1hAD_C0I",
    authDomain: "dass-54a88.firebaseapp.com",
    projectId: "dass-54a88",
    storageBucket: "dass-54a88.appspot.com",
    messagingSenderId: "374822738874",
    appId: "1:374822738874:web:3d55dd02478ad1a9539b83",
    measurementId: "G-0921YCJS75"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig); 


        const btReset = document.getElementById('btReset');



   btReset.addEventListener('click',e => {

                var auth = firebase.auth();
                var emailAddress  = document.getElementById('email').value;

    auth.sendPasswordResetEmail(String(emailAddress)).then(function()
    {
         window.alert("Email has sent to you, Please Check the mail");
    })
    .catch(function(error)
    {

        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Error :" +errorMessage);
    });
});