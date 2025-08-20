// import { v2 as cloudinary } from 'cloudinary';
// import songModel from "../models/songModel.js";

// const addSong = async (req, res) => {
//   try {
//     const name = req.body.name;
//     const desc = req.body.desc;
//     const album = req.body.album;
//     const audioFile = req.files.audio[0];
//     const imageFile = req.files.image[0];
//     const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
//     const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

//     const songData = {
//       name,
//       desc,
//       album,
//       image: imageUpload.secure_url,
//       file: audioUpload.secure_url,
//       duration
//     }

//     const song = Song(songData);
//     await song.save();

//     res.json({ success: true, message: "Song Added" })

//   } catch (error) {
//     res.json({ success: false });
//   }
// }
// const listSong = async (req, res) => {
//   try {
//     const allSongs = await songModel.find({});
//     res.json({ success: true, songs: allSongs });
//   } catch (error) {
//     res.json({ success: false });
//   }
// }

// const removeSong = async (req, res) => {
//     try {
//         await Song.findByIdAndDelete(id);
//         res.json({ success: true, message: "Song removed" });
//     } 
//     catch (error) {
//         res.json({ success: false })
//     }
// }


// export { addSong, listSong, removeSong }


import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

// Add Song
const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files?.audio?.[0];
    const imageFile = req.files?.image?.[0];

    if (!audioFile || !imageFile) {
      return res.status(400).json({ success: false, message: "Audio and image are required" });
    }

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

    const song = new songModel({
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration
    });

    await song.save();
    res.json({ success: true, message: "Song Added" });
  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({ success: false, message: "Error adding song" });
  }
};

// List Songs
const listSong = async (req, res) => {
  try {
    const allSongs = await songModel.find({});
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    console.error("Error listing songs:", error);
    res.status(500).json({ success: false, message: "Error listing songs" });
  }
};

// Remove Song
const removeSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await songModel.findByIdAndDelete(id);
    if (!song) {
      return res.status(404).json({ success: false, message: "Song not found" });
    }
    res.json({ success: true, message: "Song removed" });
  } catch (error) {
    console.error("Error removing song:", error);
    res.status(500).json({ success: false, message: "Error removing song" });
  }
};

export { addSong, listSong, removeSong };
