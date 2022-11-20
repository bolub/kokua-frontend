import API from '.'
import { Resources } from '../utils/GeneralProps';


export const getResourceList = async (tag: string) => {
  const response = await API.get(`/resources?filters[tags][name][$contains]=${tag}&populate=*`);
  return response.data.data as Resources[]
}

