import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent(params) {
  return request('/api/currentUser',
      {
        method: 'GET',
        data: params,
      });
}
export async function queryNotices() {
  return request('/api/notices');
}
