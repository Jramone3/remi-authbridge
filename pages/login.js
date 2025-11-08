import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    window.location.href = `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_CALLBACK_URL}`;
  }, []);

  return <p>Redirigiendo a Auth0...</p>;
}
