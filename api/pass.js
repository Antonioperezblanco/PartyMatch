import connectDB from "../../backend/database/db.js";
import { solicitarRecuperacion, restablecerPass, mostrarFormulario } from "../../backend/Controllers/passwordController.js";

export default async function handler(req, res) {
  await connectDB(process.env.MONGODB_URI);

  const { method, body } = req;

  if (method === "POST" && body.action === "solicitar") {
    return solicitarRecuperacion(req, res);
  } else if (method === "POST" && body.action === "restablecer" && body.token) {
    req.params = { token: body.token };
    return restablecerPass(req, res);
  } else if (method === "GET" && body.action === "restablecer" && body.token) {
    req.params = { token: body.token };
    return mostrarFormulario(req, res);
  } else if (method === "GET" && body.action === "mostrarFormulario") {
    return mostrarFormulario(req, res);
  } else {
    return res.status(404).json({ error: "Ruta no encontrada" });
  }
}
