import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
    try{
       
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json({message: "Recipe created successfully"});
    }
    catch(error){
        console.log(`Error: ${error.message}`);
    }
}

export const getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const updateRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


export const deleteRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };