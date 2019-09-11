import authentication from '../Firebase-config'
import firestore from '../Firebase-config'

export const registerUser = (emailSignIn, passwordSignIn) => {
  return authentication.createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return authentication.signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const db = ()=>{
  return firestore.firestore();
}

export const getUser = () => {
  return authentication.currentUser;
}

export const activeUser = (u2) => {
	return authentication.onAuthStateChanged((u2));
}

export const exit = () => {
  return authentication.signOut()
};

// Save names users loggedOn with Google and Facebook
// export const createUser = (cred) => {
// 	return firestore.collection('users').doc(cred.user.uid).set({
// 		name: cred.user.displayName
// 	})
// }

// export const loginGoogle = () => {
// 	const provider = new firebase.auth.GoogleAuthProvider();
//   return firebase.auth().signInWithPopup(provider)
// };

// export const loginFacebook = () => {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   return firebase.auth().signInWithPopup(provider)
// };

// export const viewPostdb = (callback) => {
// 	firestore.collection("posts").onSnapshot((querySnapshot) => {
// 		const data = [];
// 		querySnapshot.forEach((doc) => {
// 			data.push({
// 				id: doc.id,
// 				...doc.data()
// 			});
// 		});
// 		callback(data);
// 	});
// }

// export const deletePost = (postId) => {
// 	return firestore.collection("posts").doc(postId).delete();
// }

// export const updatePost = (postId, postText, modePost) => {
// 	return firestore.collection("posts").doc(postId).update({
// 		texto: postText,
// 		state: modePost,
// 	})
// };

// export const savePostdb = (uid, name, textPost, modoPost) => {
// 		return firestore.collection('posts').add({
// 			uid: uid,
// 			name: name,
// 			texto: textPost,
// 			state: modoPost,
// 			likes: 0
// 		})
// };