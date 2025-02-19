import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

const API_KEY = process.env.GOOGLE_API_KEY; // Obtiene la clave desde .env

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente!");
});

app.get("/reviews", async (req, res) => {
  const placeId = "ChIJmcos9jjVoZUR4dhlzCQmTLI"; // ID del lugar
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&sort=newest&key=${API_KEY}`;  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener las reseñas:", error);
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
});

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
