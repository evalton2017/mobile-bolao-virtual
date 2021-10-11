import firebase from 'firebase';
import envs from '../config/env';

const config = {
  apiKey: envs.APP_AUTH_APIKEY,
  authDomain: envs.APP_AUTH_AUTHDOMAIN,
  databaseURL: envs.APP_AUTH_DATABASEURL,
  projectId: envs.APP_AUTH_PROJECTID,
  storageBucket: envs.APP_AUTH_STORAGEBUCKET,
  messagingSenderId: envs.APP_AUTH_MESSAGINGSENDERID,
  appId: envs.APP_AUTH_APPID,
  measurementId: envs.APP_AUTH_MEASUREMENTID
};


class Auth {
  constructor() {
    firebase.initializeApp(config);
  }


  async sincronizarFirebase(objeto: any, callback: any) {
    let user = { 'email': objeto.user.email, 'token': objeto.idToken, 'accessToken': objeto.accessToken, 'uid': objeto.user.id, 'foto': objeto.user.photoUrl }
    try {
      var credential = firebase.auth.GoogleAuthProvider.credential(
        user.token,
        user.accessToken
      );
      let response = await firebase.auth().signInWithCredential(credential);
      response.user?.getIdToken().then((token) => {
        user.token = token;
        callback(user);
      });
    } catch (error) {
      return error;
    }
  }


}

export default new Auth();
