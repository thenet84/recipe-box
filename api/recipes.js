const express = require('express');
const router = express.Router();

//Recipe Model
const Recipe = require('../models/Recipe');

// @route GET api/recipes
// @desc Get All Recipes
// @access Public
router.get('/', (req, res) => {
  Recipe.find()
    .sort({date: -1})
    .then(recipes => res.json(recipes));
})

// @route POST api/recipes/
// @desc Create a Recipe
// @access Public
router.post('/', (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients
  });
  newRecipe.save()
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json( {success: false} ));
})

// @route UPDATE api/recipes/:id
// @desc Update a Recipe
// @access Public
router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedRecipe =>{
      res.send(updatedRecipe);
    })
    .catch(err => res.status(404).json( {success: false} )); 
})


// @route DELETE api/recipes/:id
// @desc Delete a Recipe
// @access Public
router.delete('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe =>{
      recipe.remove().then(() => res.json( {success: true} ))
    })
    .catch(err => res.status(404).json( {success: false} ));
})

module.exports = router;