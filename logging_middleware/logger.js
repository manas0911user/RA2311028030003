const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtdDk0MDVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzMyNywiaWF0IjoxNzc3NzAyNDI3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzllN2Q0MmMtMmRjZS00MWUzLTkwOGQtZmUyNjI1OGFjZDdkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuYXMgdGl3YXJpIiwic3ViIjoiNjJiYzMzZTYtNGU5My00ZWRiLWI1NGItMGRjZmU1YTg1YThiIn0sImVtYWlsIjoibXQ5NDA1QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoibWFuYXMgdGl3YXJpIiwicm9sbE5vIjoicmEyMzExMDI4MDMwMDAzIiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNjJiYzMzZTYtNGU5My00ZWRiLWI1NGItMGRjZmU1YTg1YThiIiwiY2xpZW50U2VjcmV0IjoiVmZFRGhHZnJXVEdaUk5udCJ9.uH-5cERl4BKLQ0w6Xq7SZzW0Ket-kGjGwYVza9r3WPs";

async function Log(stack, level, pkg, message) {
  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack: backend,
        level: debug,
        package: handler,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log("Log created:", response.data);

  } catch (error) {
    console.log("Logging failed:", error.message);
  }
}

module.exports = Log;