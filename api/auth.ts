import "./client";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const loginWithGoogle = async () => {
    
    try {
        await signInWithPopup(auth, provider);
    } catch (err: any) {
        console.error(err);
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
    }
}

export const logOut = async () => {
    return auth.signOut();
}

export const getCurrentUser = () => {
    return auth.currentUser
}