import connectDB from "../backend/database/db.js";
import { 
  crearFiesta, buscarFiesta, unirseFiesta, cambiarCiudad, verFiestas, desapuntarse 
} from "../backend/Controllers/fiestaController.js";
import { mostrarAmigos } from "../backend/Controllers/usuarioController.js";

export default async function handler(req, res) {
  // Conectar a MongoDB
  await connectDB(process.env.MONGODB_URI);

  const { method } = req;
  const { action } = req.query; // ?action=crear, ?action=buscar, etc.

  if (method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  switch (action) {
    case "crear":
      return crearFiesta(req, res);
    case "buscar":
      return buscarFiesta(req, res);
    case "unirse":
      return unirseFiesta(req, res);
    case "mostrar":
      return mostrarAmigos(req, res);
    case "cambiarCiudad":
      return cambiarCiudad(req, res);
    case "misFiestas":
      return verFiestas(req, res);
    case "desapuntarse":
      return desapuntarse(req, res);
    default:
      return res.status(404).json({ error: "Ruta no encontrada" });
  }
}
