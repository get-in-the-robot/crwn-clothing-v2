import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDn9o7numMV8HdHAv0oswluMoTHbHEeCMI',
  authDomain: 'crown-clothing-db-8cdc5.firebaseapp.com',
  projectId: 'crown-clothing-db-8cdc5',
  storageBucket: 'crown-clothing-db-8cdc5.appspot.com',
  messagingSenderId: '658675077582',
  appId: '1:658675077582:web:013468ebb8d12b62d29b9f',
};

const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.error('ERROR >>>', err.message);
    }
  }

  return userDocRef;
};
