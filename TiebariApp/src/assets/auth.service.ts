import * as firebase from 'firebase';


export class AuthService {
    isAuth = false;
    constructor() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
            this.isAuth = true;
            } else {
            this.isAuth = false;
        }
        });
    }
    signUpuser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    (user) => {
                        resolve(user);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }
    signInuser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    (user) => {
                        resolve(user);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }
    signOut() {
        firebase.auth().signOut();
    }
}
