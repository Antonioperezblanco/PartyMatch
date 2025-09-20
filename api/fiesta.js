import connectDB from "../backend/database/db.js";
import { 
  buscarFiesta, 
  crearFiesta, 
  unirseFiesta, 
  cambiarCiudad, 
  verFiestas, 
  desapuntarse 
} from "../backend/Controllers/fiestaController.js";
import { mostrarAmigos } from "../backend/Controllers/usuarioController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, url } = req;

  if (method === "POST" && url.endsWith("/crear")) {
    return crearFiesta(req, res);

  } else if (method === "POST" && url.endsWith("/buscar")) {
    return buscarFiesta(req, res);

  } else if (method === "POST" && url.endsWith("/unirse")) {
    return unirseFiesta(req, res);

  } else if (method === "POST" && url.endsWith("/mostrar")) {
    return mostrarAmigos(req, res);

  } else if (method === "POST" && url.endsWith("/cambiarCiudad")) {
    return cambiarCiudad(req, res);

  } else if (method === "POST" && url.endsWith("/misFiestas")) {
    return verFiestas(req, res);

  } else if (method === "POST" && url.endsWith("/desapuntarse")) {
    return desapuntarse(req, res);

  } else {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
}
