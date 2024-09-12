import { Router } from "express";
import {
  allAnimal,
  createAnimal,
  editAnimal,
  deleteAnimal,
} from "../controllers/animalControllers.js";
const animalsRoute = Router();

animalsRoute.get("/", allAnimal);
animalsRoute.post("/", createAnimal);
animalsRoute.put("/:id", editAnimal);
animalsRoute.delete("/:id", deleteAnimal);

export default animalsRoute;
