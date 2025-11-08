import { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    const logoutUrl = `https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${process.env.AUTH0_LOGOUT_URL}`;
    window.location.href = logoutUrl;
  }, []);

  return <p>Cerrando sesión...</p>;
}
