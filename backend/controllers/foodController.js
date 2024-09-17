
import food from "../models/food.js";
import fs from 'fs'


// add food items
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food_data = new food({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageName: image_filename,
        category: req.body.category
    })
    try {
        await food_data.save();
        res.json({ success: true, message: "Food Added" })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}
const listFood = async (req, res) => {
    try {
        const foodList = await food.find({});
        res.json({ success: true, data: foodList })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const foodItem = async (req, res) => {
    try {
        const foodItem = await food.findById(req.body.id);
        res.json({ success: true, data: foodItem })
    } catch (error) {
        res.json({ success: false, message: "Error" })
    }
}

const removeFood = async (req, res) => {

    try {

        const foodItem = await food.findById(req.body.id);
        console.log(foodItem);
        fs.unlink(`uploads/${foodItem.imageName}`, () => { })

        await food.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Food removed" })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}
export { addFood, listFood, removeFood, foodItem }