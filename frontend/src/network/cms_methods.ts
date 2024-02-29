import cms_api from "./cms_api";

interface GetCollectionInterface {
  collection: string;
  pageLimit?: number;
}
export async function getCollection<T> ({collection, pageLimit=10}: GetCollectionInterface): Promise<T> {
  const response = await cms_api.get(`/api/${collection}?limit=${pageLimit}`)
  return response.data.docs
}

interface GetCollectionItemInterface {
  collection: string;
  queryString: string;
}
export async function getCollectionItem<T> ({collection,queryString}: GetCollectionItemInterface): Promise<T> {
  const response = await cms_api.get(`/api/${collection}?${queryString}`)
  return response.data.docs[0]
}

interface GetGlobalInterface {
  global: string;
}
export async function getGlobal<T>({global}:GetGlobalInterface): Promise<T> {
  const response = await cms_api.get(`/api/globals/${global}`)
  return response.data
}