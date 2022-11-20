import API from '.'
import { Category } from '../utils/GeneralProps';

export const getLanguages = async () => {
  const response = await API.get('/languages');
  return response.data.data as Category[];
}
export const getFrameworksAndLibraries = async () => {
  const response = await API.get('/frameworks');
  return response.data.data as Category[];
}
