import connectDB from "../../backend/database/db.js";
import { solicitarRecuperacion, restablecerPass, mostrarFormulario } from "../../backend/Controllers/passwordController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, query } = req;
  const params = query.params || []; // esto contiene la parte dinámica de la URL

  if (method === "POST" && params[0] === "solicitar") {
    return solicitarRecuperacion(req, res);

  } else if (method === "POST" && params[0] === "restablecer" && params[1]) {
    req.params = { token: params[1] }; // simula req.params.token
    return restablecerPass(req, res);

  } else if (method === "GET" && params[0] === "restablecer" && params[1]) {
    req.params = { token: params[1] }; // para mostrarFormulario
    return mostrarFormulario(req, res);

  } else if (method === "GET" && params[0] === "mostrarFormulario") {
    return mostrarFormulario(req, res);

  } else {
    return res.status(404).json({ error: "Ruta no encontrada" });
  }
}
