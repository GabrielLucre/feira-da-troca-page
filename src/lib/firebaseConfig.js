import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKeyFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_APIKEY;
const authDomainFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_AUTHDOMAIN;
const projectIdFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_PROJECTID;
const storageBucketFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_STORAGEBUCKET;
const messagingSenderIdFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_MESSAINGSENDERID;
const appIdFirebaseComandas = import.meta.env.VITE_FIREBASE_COMANDAS_APPID;

const firebaseConfigComandas = {
    apiKey: apiKeyFirebaseComandas,
    authDomain: authDomainFirebaseComandas,
    projectId: projectIdFirebaseComandas,
    storageBucket: storageBucketFirebaseComandas,
    messagingSenderId: messagingSenderIdFirebaseComandas,
    appId: appIdFirebaseComandas,
};

const appComandas = getApps().find(app => app.name === "comandas") || initializeApp(firebaseConfigComandas, "comandas");
const dbComandas = getFirestore(appComandas);

export { dbComandas };

