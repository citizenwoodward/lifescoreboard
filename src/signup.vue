<template>
<div class="sign-up">
  <button v-on:click="signUpWithGoogle">Sign in with Google </button>
  <button v-on:click="signOut">Sign Out </button>
</div>

</template>

<script>
import firebase from 'firebase';

import {db} from './firebase';
var usersRef = db.ref("users");
var newCardRef = db.ref("newcards");

var provider = new firebase.auth.GoogleAuthProvider()


export default {
  name: 'signUp',
  data: function() {
    return {
      user: {
        email: '',
        name: '',
        userID: ''
      },
      templateCard: {
        0: {goal: "Goal 1", complete: 0},
        1: {goal: "Goal 2", complete: 0}
      }
    }
  },
  mounted: function() {
    this.authWatcher();
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // this.$router.replace('hello')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    signUpWithGoogle: function() {
      firebase.auth().signInWithRedirect(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user

      // ...
      }).catch(function(error) {
        console.log('error my dude')
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
      // ...
      })
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    },
    authWatcher: function() {
      var vueLocal = this
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)
          vueLocal.user.email = user.email,
          vueLocal.user.name = user.displayName  
          vueLocal.user.userID = user.uid 

          
          newCardRef.child(user.uid).set(vueLocal.templateCard)

          usersRef.child(user.uid).set(vueLocal.user);

          vueLocal.$emit('signin', vueLocal.user)
        // User is signed in.
        } else {
          console.log('else')
        // No user is signed in.
        }
      })
    }
  }
}

</script>

<style scoped="">
.signUp {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
