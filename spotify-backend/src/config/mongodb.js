// import mongoose from "mongoose";
// const connectDB=async()=>{

//     mongoose.connection.on('connected',()=>{
//         console.log("connection established")
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);

// }
// export default connectDB;








import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "spotify" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;

