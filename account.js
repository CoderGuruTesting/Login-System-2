const firebaseConfig = {
    apiKey: "AIzaSyA6FyF0YZ8QAd3hd35iIPCk7JNCPHO8F9g",
    authDomain: "login-system-2-338613.firebaseapp.com",
    projectId: "login-system-2-338613",
    storageBucket: "login-system-2-338613.appspot.com",
    messagingSenderId: "135928392566",
    appId: "1:135928392566:web:14d81ddedbb3e6ef696857"
};

firebase.initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl,
        userString: "new user string"
    });
}

function setSpecialString(userId, specialString) {
    firebase.database().ref('users/' + userId).update({
        userString: specialString
    });
}