(function(){
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
        // firebase.analytics();

        const temail = document.getElementById('email');
        const Femail = document.getElementById('Femail');
        const password = document.getElementById('password');
        const btLogin = document.getElementById('btLogin');
        const btReset = document.getElementById('btReset');
         
        btLogin.addEventListener('click', e =>{
            e.preventDefault();

            const email = temail.value;
            const pass = password.value;
            const auth =  firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email,pass);


            promise.catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Error :" +errorMessage);

            });
        });

}());