import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public afAuth: AngularFireAuth) { }


  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('email',result.user?.email!)
      })
      .catch((error) => {
        window.alert('Invalid UserName Passeord');
      });
  }


  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignOut() {
    localStorage.setItem('email','')
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
