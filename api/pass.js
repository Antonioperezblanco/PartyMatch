import connectDB from "../backend/database/db.js";
import { 
  solicitarRecuperacion, 
  restablecerPass, 
  mostrarFormulario 
} from "../backend/Controllers/passwordController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, url } = req;

  if (method === "GET" && url.includes("/restablecer/")) {
    return mostrarFormulario(req, res);

  } else if (method === "GET" && url.endsWith("/mostrarFormulario")) {
    return mostrarFormulario(req, res);

  } else if (method === "POST" && url.endsWith("/solicitar")) {
    return solicitarRecuperacion(req, res);

  } else if (method === "POST" && url.includes("/restablecer/")) {
    return restablecerPass(req, res);

  } else {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
}
