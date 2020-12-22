
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

function getdata() {
    var user=document.getElementById("name").value;
    var id= firebase.auth().currentUser.uid;

    firebase.database().ref('User/'+user).once('value').then(function (snapshot) {
        var name=snapshot.val().companyname;
        var pn=snapshot.val().name;
        var phone=snapshot.val().phone;
    
        document.getElementById("companyname").innerHTML=name;
        document.getElementById("pn").innerHTML=pn;
        document.getElementById("phone").innerHTML=phone;
    });
}