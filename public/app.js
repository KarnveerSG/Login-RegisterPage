document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

const txtEmail = document.getElementById('loginText');
const txtPassword = document.getElementById('passwordText');
const loginButton = document.getElementById('loginButton');
const idText = document.getElementById('userRegisterTest');
const emailRegisterText = document.getElementById('emailRegisterText');
const passwordRegisterText = document.getElementById('passwordRegisterText');
const passwordConfirmRegisterText = document.getElementById('passwordConfirmRegisterText');
const registerButton = document.getElementById('passwordRegisterText');
    function Login() {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    }

    function Register() {
    console.log('here');
        console.log(emailRegisterText.value);
        if (emailRegisterText.value == null) { 
        }
        const email = emailRegisterText.value;   //<-- Here lies the problem, this is null when program reads it
        const pass = passwordRegisterText.value; // (uncaught reference error: cannot access ___ before initialization )
        const passConfirm = passwordConfirmRegisterText.value;
        const auth1 = firebase.auth();
        const promise = auth1.createUserWithEmailAndPassword(email, pass).catch(function (error) {
            console.log(error.code);
            alert(error.code);
        });
        alert(e.message);
        promise.catch(e => console.log(e.message));
}

//Checks whether someone is logged in or not
/* firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log("Currently not logged in!")
    }
})  */

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
            const user = result.user;
            document.write('Hello');
        console.log("Success... Google account linked");
        console.log(user);
        })
}

function facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.creditial.accessToken
        var user = result.user;
        console.log("Success... Facebook account linked");
        console.log(user);
    })
}