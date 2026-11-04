import mongoose from "mongoose";

export const connectDB = async () => {
	const uri = process.env.MONGO_URI;

	if (!uri) {
		console.error("MongoDB connection failed: MONGO_URI is not set. Add it to the project root .env file and restart the server.");
		process.exit(1);
	}

	try {
		const conn = await mongoose.connect(uri);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`MongoDB connection failed: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
