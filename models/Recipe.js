import mongoose from 'mongoose';

const RecipeSchema =  mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    time: { type: String, required: true },
  }, { timestamps: true });
const Recipe = mongoose.model('Recipe', RecipeSchema);
export default Recipe;