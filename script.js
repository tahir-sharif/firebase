// Basic Functions used..
function errMsg(msg , path){
    path.innerHTML = msg
    setTimeout(()=>{ path.innerHTML = '&nbsp;' } , 2500)
}



// Page Information
var inputForm = document.querySelector('.inputForm');
var mnPage = document.querySelector('.mnPage');

// signup Info.
var regUserName = document.querySelector('.userName');
var regEmail = document.querySelector('.email');
var regPassword = document.querySelector('.password');

// Login Info
var loginEmail = document.querySelector('.loginEmail');
var loginPassword = document.querySelector('.loginPassword');

// Form Buttons
var signupBtn = document.querySelector('.signupBtn');
var loginBtn = document.querySelector('.loginBtn');

// Loader to Hide on page load
var loader = document.querySelector('.loader');

// Show & Hide Login and signup forms
var loginForm = document.querySelector('.loginForm');
var signupForm = document.querySelector('.signupForm');

function showLoginForm() {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
};

function showSignupForm() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
};


// Firebase Authentication
const firebaseConfig = {
    apiKey: "AIzaSyAFEIMiMQcE8cB_Ms7dJYA2F4U2Mw4ddGQ",
    authDomain: "tahir-ff29f.firebaseapp.com",
    projectId: "tahir-ff29f",
    storageBucket: "tahir-ff29f.appspot.com",
    messagingSenderId: "660400590737",
    appId: "1:660400590737:web:c32bef823b2541a39a5430",
    measurementId: "G-8KFK8LSCV0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth)

// Create New account
function signup() {
    const email = regEmail.value
    const password = regPassword.value

    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        alert(error)
    });
}
signupBtn.onclick = () => { signup() }

// Login Function
function login() {
    const email = loginEmail.value;
    const password = loginPassword.value;

    auth.signInWithEmailAndPassword(email, password).catch((error) => {
        alert(error);
    })
};
loginBtn.onclick = () => { login() }

// Logout Function
function logout() {
    auth.signOut();
}

auth.onAuthStateChanged((user) => {
    loader.style.display = 'none'
    if (user) {

        document.title = 'Welcome'

        inputForm.style.display = 'none'
        mnPage.style.display = 'block'

        console.log('you are logged in !', user.email)
        document.querySelector('.wlcm').innerHTML += ' ' + user.email

    } else {

        document.title = 'Login or Signup'

        inputForm.style.display = 'flex'
        mnPage.style.display = 'none'

        console.log('no account have logged in !')

    }
})