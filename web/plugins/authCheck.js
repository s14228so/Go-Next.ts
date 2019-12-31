import firebase from "./firebase";
import axios from "./axios";


export const authCheck = async _ => {
    return new Promise((resolve, reject) => {
        const f_auth = firebase.auth();
        f_auth.onAuthStateChanged(async user => {
            const { data } =
                await axios.get("/users", {
                    params: {
                        email: user.email
                    }
                })
            resolve(data);
        });
    });
}