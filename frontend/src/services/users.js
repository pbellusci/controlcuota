import axios from 'axios';
import { API , SIGN_IN, SIGN_UP} from '../config/routes'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


export async function signIn(formData) { return await axios.post(API + SIGN_IN, formData) }
export async function signUp(formData) { return await axios.post(API + SIGN_UP, formData) }

export function setCurrentUser(data) {  
    const userData = JSON.stringify(data.data.user)  

    cookies.set("control-tkn", data.headers.authorization);
    cookies.set("control-current-user", userData);
}

export const getCurrentUserToken = () => cookies.get("control-tkn")
export const  getCurrentUserData = () => cookies.get("control-current-user")