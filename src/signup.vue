<template>
<div class="sign-up">
  <button v-on:click="signUpWithGoogle">Sign in with Google </button>
</div>

</template>

<script>
import firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider()


export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: '',
      userID: '',
      userToken: ''
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

        console.log('hey')
        console.log(token, user)

        this.userID = user
        this.userToken = token
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
    authWatcher: function() {
      var vueLocal = this
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('heydd')
          console.log(user)
          vueLocal.$emit('signin', user)
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
