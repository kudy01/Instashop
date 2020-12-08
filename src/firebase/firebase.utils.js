import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHLsUnWqzJNSfq0NKxjYRSYMmlYUyVJ74",
    authDomain: "instashop-db.firebaseapp.com",
    databaseURL: "https://instashop-db.firebaseio.com",
    projectId: "instashop-db",
    storageBucket: "instashop-db.appspot.com",
    messagingSenderId: "81544622722", 
    appId: "1:81544622722:web:c860cb72d106787b237a9b", 
    measurementId: "G-KYP17R4NFF"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth){
		return;
	}
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error', error.meassage)
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
