import axios from 'axios';
import { API , SETUP} from '../config/routes'

export async function getAllCategorias() { return await axios.get(API + SETUP.CATEGORIAS) }