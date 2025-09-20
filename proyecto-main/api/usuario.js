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
  // Conectamos a MongoDB Atlas
  await connectDB(process.env.MONGODB_URI);

  const { method } = req;
  
  // Extraemos la ruta después de /api/usuario
  const path = req.url.replace(/^\/api\/usuario/, "");

  if (method === "POST" && path === "/crear") {
    return crearUsuario(req, res);

  } else if (method === "POST" && path === "/inicioSesion") {
    return inicioSesion(req, res);

  } else if (method === "PUT" && path === "/editarUsuario") {
    return editarUsuario(req, res);

  } else if (method === "POST" && path === "/anadir") {
    return anadirAmigo(req, res);

  } else if (method === "POST" && path === "/aceptar") {
    return aceptarSolicitud(req, res);

  } else if (method === "POST" && path === "/rechazar") {
    return rechazarSolicitud(req, res);

  } else if (method === "POST" && path === "/eliminar") {
    return eliminarAmigo(req, res);

  } else {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
}
