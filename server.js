import express from "express";
import cors from "cors";  // Solo esta importación es necesaria
import fetch from "node-fetch";

const app = express();
app.use(cors());  // Usamos cors aquí, sin la duplicación
app.use(cors({ origin: "http://localhost:5173" })); // Permite solicitudes solo desde el frontend en puerto 3000

const API_KEY = "AIzaSyCaD2puH4q1wybYWXLApRSlCNhuREaknv8";

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente!");
});

app.get("/reviews", async (req, res) => {
  const placeId = "ChIJmcos9jjVoZUR4dhlzCQmTLI";  // Tu placeId
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
