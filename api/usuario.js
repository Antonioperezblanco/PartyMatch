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

  const { method, body } = req;

  if (method === "POST" && body.action === "crear") {
    return crearUsuario(req, res);
  } else if (method === "POST" && body.action === "inicioSesion") {
    return inicioSesion(req, res);
  } else if (method === "PUT" && body.action === "editarUsuario") {
    return editarUsuario(req, res);
  } else if (method === "POST" && body.action === "anadir") {
    return anadirAmigo(req, res);
  } else if (method === "POST" && body.action === "aceptar") {
    return aceptarSolicitud(req, res);
  } else if (method === "POST" && body.action === "rechazar") {
    return rechazarSolicitud(req, res);
  } else if (method === "POST" && body.action === "eliminar") {
    return eliminarAmigo(req, res);
  } else {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
}
