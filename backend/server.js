// backend/index.js (ваш бекенд)
import express from "express";
import dotenv from "dotenv";
import { google } from "googleapis";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

const keys = {
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  project_id: process.env.GOOGLE_PROJECT_ID,
};

const auth = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

const sheets = google.sheets({ version: "v4", auth });

app.get("/", (req, res) => {
  res.send("Hello World!");
})


// Маршрут для отримання даних з Google Sheets
app.get("/api/sheet-data", async (req, res) => {
  const spreadsheetId = "1Q0uE0MHlDQk40cCUaS61xI6zAK4KZdbUIqvSUxh6KxQ";
  const range = "'СБ ПАЙТОН 2 12:30'!G3"; // Вкажіть ваш діапазон

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    res.json(response.data.values);

  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    res.status(500).send("Error fetching data from Google Sheets");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

