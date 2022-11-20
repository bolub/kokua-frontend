import API from '.'
import { Category } from '../utils/GeneralProps';

export const getLanguages = async () => {
  const response = await API.get('/languages?populate=*');
  return response.data.data as Category[];
}
export const getFrameworksAndLibraries = async () => {
  const response = await API.get('/frameworks?populate=*');
  return response.data.data as Category[];
}
