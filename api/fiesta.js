import connectDB from "../backend/database/db.js";
import { 
  crearFiesta, buscarFiesta, unirseFiesta, cambiarCiudad, verFiestas, desapuntarse 
} from "../backend/Controllers/fiestaController.js";
import { mostrarAmigos } from "../backend/Controllers/usuarioController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, body } = req;

  if (method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  if (body.action === "crear") {
    return crearFiesta(req, res);
  } else if (body.action === "buscar") {
    return buscarFiesta(req, res);
  } else if (body.action === "unirse") {
    return unirseFiesta(req, res);
  } else if (body.action === "mostrar") {
    return mostrarAmigos(req, res);
  } else if (body.action === "cambiarCiudad") {
    return cambiarCiudad(req, res);
  } else if (body.action === "misFiestas") {
    return verFiestas(req, res);
  } else if (body.action === "desapuntarse") {
    return desapuntarse(req, res);
  } else {
    return res.status(404).json({ error: "Ruta no encontrada" });
  }
}
