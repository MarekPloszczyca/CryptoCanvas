import { Request, Response, NextFunction } from "express";

const express = require("express");
const mongoConnect = require("./database").mongoConnection;
const fetchProducts = require("../util/fetchAll");

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const fetch = async () => {
    const result = await fetchProducts();
    res.json(result);
  };
  fetch();
});

mongoConnect(() => {
  app.listen(8000);
});
