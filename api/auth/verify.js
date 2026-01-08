import jwt from 'jsonwebtoken';
import { setCors } from "../../utils/cors.js";

export default async function handler(req, res) {
    
  setCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ verified: true, data: decoded });
  } catch (err) {
    res.status(401).json({ message: "Token not verified", error: err.message });
  }
}