import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    // Your web app's Firebase configuration
          apiKey: "AIzaSyCRJ1U5ETJG8oHmLCH9_JXxU5aePgivxCs",
      authDomain: "team-voting-app-90d6d.firebaseapp.com",
      projectId: "team-voting-app-90d6d",
      storageBucket: "team-voting-app-90d6d.appspot.com",
      messagingSenderId: "493819428798",
      appId: "1:493819428798:web:f2430624ec80f7ece7c3ef"
    
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig),

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();