import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONDO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@linked-clone-4.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`;

if (!connectionString) {
  throw new Error("Please provide a valid connection string");
}

const connectDB = async () => {
  if (mongoose.connection?.readyState >= 1) {
    return;
  }

  try {
    console.log("----- connecting to MONGODB -----");
    await mongoose.connect(connectionString);
  } catch (err) {
    console.log("Error connecting to MONGODB: ", err);
  }
};
