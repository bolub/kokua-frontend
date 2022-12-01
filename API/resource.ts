import API from '.'
import { Resource } from '../utils/GeneralProps';


export const getResource = async (id: string) => {

  const response = await API.get(`/resources/${id}?populate=*`);

  return response.data.data as Resource
}

