import API from '.'
import { Resources } from '../utils/GeneralProps';


export const getResourceList = async ({ tag, search }: { tag: string, search: string }) => {
  const urlToUse = search !== 'true' ? `/resources?filters[tags][name][$containsi]=${tag}&populate=*` : `/resources?filters[$or][0][name][$containsi]=${tag}&filters[$or][1][tags][name][$containsi]=${tag}&populate=*`

  const response = await API.get(urlToUse);

  return response.data.data as Resources[]
}

