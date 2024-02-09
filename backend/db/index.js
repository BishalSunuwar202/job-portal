import mongoose from "mongoose";

//database is in another continent so async is used
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("\n MongoDb connected");
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDb;

//Exit code 1 is used when unhandled fatal exceptions occur that were not handled whereas Exit code 0 is used to terminate when no more async operations are happening.
