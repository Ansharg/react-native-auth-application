import { auth } from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function createUser(email,password){
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials);
    const token = userCredentials._tokenResponse.idToken;
    return token;
}

export async function authenticate(email,password){
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials);
    const token = userCredentials._tokenResponse.idToken;
    return token;
}