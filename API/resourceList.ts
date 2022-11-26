import API from '.'
import { Resources } from '../utils/GeneralProps';


export const getResourceList = async ({ tag, search }: { tag: string, search: string }) => {
  const urlToUse = search !== 'true' ? `/resources?filters[tags][name][$contains]=${tag}&populate=*` : `/resources?filters[$or][0][name][$contains]=${tag}&filters[$or][1][tags][name][$contains]=${tag}&populate=*`

  const response = await API.get(urlToUse);

  return response.data.data as Resources[]
}

