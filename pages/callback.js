import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      // Aquí podrías intercambiar el código por un token si tienes backend
      console.log('Código recibido:', code);
      router.push('/');
    }
  }, []);

  return <p>Procesando autenticación...</p>;
}
