import mongoose from 'mongoose';

const connectDB = async (uri) => {
  if (mongoose.connections[0].readyState) return; // ya conectado
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    throw error;
  }
};

export default connectDB;
