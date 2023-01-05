import { request } from '@api';

const baseUrl = '/auth';

export const postLogin = (data: RequestAuth.PostLogin) => {
  const url = `${baseUrl}/login`;
  return request.post<ResponseAuth.PostLogin, RequestAuth.PostLogin>(url, data);
};
