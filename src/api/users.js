import http from './http';

export async function getProfile() {
  return http.get('/users/me');
}
