const express = require("express");
const axios = require("axios");

const Log = require("../logging_middleware/logger");

const app = express();

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtdDk0MDVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzMyNywiaWF0IjoxNzc3NzAyNDI3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzllN2Q0MmMtMmRjZS00MWUzLTkwOGQtZmUyNjI1OGFjZDdkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuYXMgdGl3YXJpIiwic3ViIjoiNjJiYzMzZTYtNGU5My00ZWRiLWI1NGItMGRjZmU1YTg1YThiIn0sImVtYWlsIjoibXQ5NDA1QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoibWFuYXMgdGl3YXJpIiwicm9sbE5vIjoicmEyMzExMDI4MDMwMDAzIiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNjJiYzMzZTYtNGU5My00ZWRiLWI1NGItMGRjZmU1YTg1YThiIiwiY2xpZW50U2VjcmV0IjoiVmZFRGhHZnJXVEdaUk5udCJ9.uH-5cERl4BKLQ0w6Xq7SZzW0Ket-kGjGwYVza9r3WPs";

app.get("/optimize", async (req, res) => {

  try {

    await Log(
      "backend",
      "info",
      "handler",
      "Optimization started"
    );

    const depots = await axios.get(
      "http://20.207.122.201/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    const vehicles = await axios.get(
      "http://20.207.122.201/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    res.json({
      depotData: depots.data,
      vehicleData: vehicles.data
    });

  } catch (error) {

    await Log(
      "backend",
      "error",
      "handler",
      error.message
    );

    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});