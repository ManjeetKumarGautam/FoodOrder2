import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manjeetkumar1572000:wzWyzoJ92GLSNTca@foodorder.ngjxl.mongodb.net/food?retryWrites=true&w=majority&appName=FoodOrder').then(() => console.log("Database connected..."))
}