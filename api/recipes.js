const express = require('express');
const router = express.Router();

//Recipe Model
const Recipe = require('../models/Recipe');

// Get All Recipes
router.get('/', (req, res) => {
  Recipe.find()
    .sort({date: -1})
    .then(recipes => res.json(recipes));
})

// Get a Recipe
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe =>{
      res.send(recipe);
    })
    .catch(err => res.status(500).json( {success: false} )); 
})

// Create a Recipe
router.post('/', (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients
  });
  newRecipe.save()
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json( {success: false} ));
})

// Update a Recipe
router.put('/:id', (req, res) => {
  Recipe.findOneAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedRecipe =>{
      res.send(updatedRecipe);
    })
    .catch(err => res.status(500).json( {success: false} )); 
})


// Delete a Recipe
router.delete('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe =>{
      recipe.remove().then(() => res.json( {success: true} ))
    })
    .catch(err => res.status(500).json( {success: false} ));
})

module.exports = router;