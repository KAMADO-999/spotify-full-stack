// import { addSong,listSong,removeSong } from "../controllers/songController.js";
// import express from 'express'
// import upload from "../middleware/multer.js";
// const songRouter =express.Router();

// songRouter.post('/ add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong);
// songRouter.get('/ list',listSong);
// songRouter.post('/remove',removeSong)

// export default songRouter;

import express from "express";
import upload from "../middleware/multer.js";
import { addSong, listSong, removeSong } from "../controllers/songController.js";

const songRouter = express.Router();

// POST - Add song
songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 }
  ]),
  addSong
);

// GET - List songs
songRouter.get("/list", listSong);

// DELETE - Remove song by ID
songRouter.delete("/remove/:id", removeSong);

export default songRouter;

