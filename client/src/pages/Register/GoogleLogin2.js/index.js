const token = new URL(window.location.href).searchParams.get('accessToken');
const refreshToken = new URL(window.location.href).searchParams.get(
  'refreshToken'
);
const accessTokenExpiration = new URL(window.location.href).searchParams.get(
  'accessTokenExpiration'
);
const refreshTokenExpiration = new URL(window.location.href).searchParams.get(
  'refreshTokenExpiration'
);

if (token) {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('accessTokenExpiration', accessTokenExpiration);
  localStorage.setItem('refreshTokenExpiration', refreshTokenExpiration);
}