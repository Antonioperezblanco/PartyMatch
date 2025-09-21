import connectDB from "../backend/database/db.js";
import { 
  crearUsuario, 
  inicioSesion, 
  editarUsuario, 
  anadirAmigo, 
  aceptarSolicitud, 
  rechazarSolicitud, 
  eliminarAmigo 
} from "../backend/Controllers/usuarioController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, url } = req; // usamos la URL tal cual

  if (method === "POST" && url.endsWith("/crear")) {
    return crearUsuario(req, res);

  } else if (method === "POST" && url.endsWith("/inicioSesion")) {
    return inicioSesion(req, res);

  } else if (method === "PUT" && url.endsWith("/editarUsuario")) {
    return editarUsuario(req, res);

  } else if (method === "POST" && url.endsWith("/anadir")) {
    return anadirAmigo(req, res);

  } else if (method === "POST" && url.endsWith("/aceptar")) {
    return aceptarSolicitud(req, res);

  } else if (method === "POST" && url.endsWith("/rechazar")) {
    return rechazarSolicitud(req, res);

  } else if (method === "POST" && url.endsWith("/eliminar")) {
    return eliminarAmigo(req, res);

  } else {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
}
