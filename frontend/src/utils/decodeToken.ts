import {jwtDecode} from 'jwt-decode'
import jwt from 'jsonwebtoken';

interface DecodedToken {
  [key: string]: any;
}


// Ejemplo de función para decodificar un token JWT
export const decodeToken = (token: string) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken as { id: string; name: string; role: string; email: string }; // Asegúrate de especificar el tipo correcto aquí
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };


  export function acortarToken(token: string): DecodedToken | null {
    try {
      // Eliminamos el prefijo 'token=' si está presente
      const cleanToken = token.startsWith('token=') ? token.slice(6) : token;
      const decoded = jwt.decode(cleanToken);
  
      if (decoded) {
        return decoded as DecodedToken;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }