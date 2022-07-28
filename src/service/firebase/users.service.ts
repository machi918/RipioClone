import firestore from '@react-native-firebase/firestore';

export interface UserData {
  name: string;
  mail: string;
  rpc: number;
  pesos: number;
}

export interface UserCoins {
  coin: string;
  quantity: number;
}

async function onUserCreate(uid: string, userData: UserData) {
  await firestore()
    .collection('users')
    .doc(uid)
    .set({name: userData.name, mail: userData.mail, rpc: 0, pesos: 0})
    .then(() => {
      console.log('User added!');
    });
}

async function getUser(uid: string) {
  const userSnapshot = (await firestore().collection('users').doc(uid).get())!.data();
  return userSnapshot as UserData;
}

async function updateFirebaseRPC(uid: string, rpc: number) {
  const response = await firestore().collection('users').doc(uid).update({rpc});
  return response;
}

async function updateFirebasePesos(uid: string, pesos: number) {
  const response = await firestore().collection('users').doc(uid).update({pesos});
  return response;
}

export {getUser, updateFirebaseRPC, updateFirebasePesos, onUserCreate};
