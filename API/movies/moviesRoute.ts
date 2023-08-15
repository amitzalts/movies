import express from "express"
const router = express.Router()

import {
  getOneMovie,
  getMovies,
  // enterMovie,

} from "./moviesControl"

router
  .post("/get-one-movie", getOneMovie)
  .get("/get-movies", getMovies)
  // .post("/enter-movie", enterMovie)
  

export default router;

