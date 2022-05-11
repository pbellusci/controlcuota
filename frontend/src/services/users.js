import axios from 'axios';
import { API , SIGN_IN, SIGN_UP} from '../config/routes'

export async function signIn(formData) { return await axios.post(API + SIGN_IN, formData) }