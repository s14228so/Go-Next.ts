import firebase from "./firebase";
import axios from "./axios";
import { set_user } from "../actions/user"
import { add } from "../actions"
import { useContext } from "react"
import reducers from "../store/reducers"
import { Store } from '../store/context';



export const authCheck = () => {
    const { state, dispatch } = useContext(Store);
    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            const userData =
                await axios.get("/users", {
                    params: {
                        email: user.email
                    }
                })

            dispatch(set_user(userData.data))

            // add(todo: any): {
            //     type: ActionType;
            //     payload: any;
            // }
            // store.commit('setUser', userData.data)

            // store.commit('changeMount', true)
            // } else {
            //     window.setTimeout(() => {
            //         store.commit('changeMount', true)
            //     }, 500)
        }
    })
}