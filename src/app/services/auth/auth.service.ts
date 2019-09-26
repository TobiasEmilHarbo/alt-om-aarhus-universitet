import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;
  user: firebase.User = null;
  token: firebase.auth.IdTokenResult = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

    this.authState$ = this.afAuth.authState;

    this.authState$.subscribe(async (user) => {

      this.user = user;
      if (!user) { this.token = null; }
    });
  }

  async signIn(email: string, password: string): Promise<boolean> {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return true;
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
