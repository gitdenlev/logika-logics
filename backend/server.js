import express from "express";
import dotenv from "dotenv";
import { google } from "googleapis";
import cors from "cors"; // Импортируй cors

dotenv.config();

const app = express();
const PORT = process.env.PORT; // Значение по умолчанию

// Используй cors
app.use(cors());

const keys = {
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  project_id: process.env.GOOGLE_PROJECT_ID,
};

const auth = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

const sheets = google.sheets({ version: "v4", auth });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses/python", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses/python", async (req, res) => {
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const ranges = ["G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"];
  const range = `'Python Субота 12:30'!${ranges[0]}:${
    ranges[ranges.length - 1]
  }`;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const data = response.data.values; // Припускаємо, що дані в одному стовпці
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    res.status(500).send("Error fetching data from Google Sheets");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
