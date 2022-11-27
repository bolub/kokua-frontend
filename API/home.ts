import API from '.'
import { Category, Tag } from '../utils/GeneralProps';

export const getLanguages = async () => {
  const response = await API.get('/languages');
  return response.data.data as Category[];
}
export const getFrameworksAndLibraries = async () => {
  const response = await API.get('/frameworks');
  return response.data.data as Category[];
}

export const getTags = async () => {
  const response = await API.get('/tags?pagination[pageSize]=100');
  return response.data.data as Tag[];
}
