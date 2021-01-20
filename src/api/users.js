import http from './http';

export async function getProfile() {
  return http.get('/users/me');
}

export async function userChangePassword(data) {
  return http.put('/users/me/changePassword', data);
}
