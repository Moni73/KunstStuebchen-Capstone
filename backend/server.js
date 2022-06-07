const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
dotenv.config();
const app = express();

app.use(cors());
app.use(json());

//const { parsed: config } = dotenv.config();

const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const BASE_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}`;

const auth = {
  username: API_KEY,
  password: API_SECRET,
};

app.get("/photos", async (req, res) => {
  const response = await axios.get(BASE_URL + "/resources/image", {
    auth,
    params: {
      next_cursor: req.query.next_cursor,
    },
  });
  return res.send(response.data);
});

app.get("/search", async (req, res) => {
  const response = await axios.get(BASE_URL + "/resources/search", {
    auth,
    params: {
      expression: req.query.expression,
    },
  });

  return res.send(response.data);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
