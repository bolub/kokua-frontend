import API from '.'
import { Resources } from '../utils/GeneralProps';


export const getResourceList = async ({ tag, search }: { tag: string, search: string }) => {

  const pagination = 'pagination[pageSize]=100';

  const tagFilters = `filters[tags][name][$containsi]=${tag}`;
  const searchFilters = `filters[$or][0][name][$containsi]=${tag}&filters[$or][1][tags][name][$containsi]=${tag}`


  const filters = search !== 'true' ? tagFilters : { searchFilters }

  const response = await API.get(`/resources?${filters}&${pagination}&populate=*`);

  return response.data.data as Resources[]
}

