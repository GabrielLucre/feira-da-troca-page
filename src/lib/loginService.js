import CryptoJS from "crypto-js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbComandas } from "./firebaseConfig";

const secretKey = import.meta.env.VITE_SECRET_KEY;

export const loginComanda = async (valueName, date) => {
    try {
        const comandasRef = collection(dbComandas, "comandas");

        const q = query(
            comandasRef,
            where("nome", "==", valueName),
            where("data", "==", date)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { error: "Dados incorretos." };
        } else {
            let docSnap;
            querySnapshot.forEach((doc) => {
                docSnap = doc;
            });

            if (!docSnap || !docSnap.data().ativo) {
                return { error: "Comanda não está ativa." };
            }

            const response = {
                message: "Login bem-sucedido!",
                userData: {
                    id: docSnap.id, ...docSnap.data()
                }
            };

            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(response.userData), secretKey).toString();
            sessionStorage.setItem("user", encryptedData);

            return response;
        }
    } catch (err) {
        console.error("Erro ao verificar login:", err);
        return { error: "Erro no servidor. Tente novamente." };
    }
};
