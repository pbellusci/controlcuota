import axios from 'axios';
import { API , SETUP} from '../config/routes'

export async function getAllConfig() { return await axios.get(API + SETUP.ALL) }