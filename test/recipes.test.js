const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

//mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

const Recipe = require('../models/Recipe');

chai.use(chaiHttp);

describe('Recipes', () => {
	// Empty the database before each test
	beforeEach(done => { 
		Recipe.deleteMany({}, (err) => { 
		   done();		   
		});		
	});
  
  // Test the /GET route
  describe('/GET recipes', () => {
	  it('it should GET all the recipes', done => {
			chai.request(server)
		    .get('/api/recipes')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
  
  // Test the /POST route
  describe('/POST recipe', () => {
	  it('it should not POST a recipe without name', done => {
	  	const recipe = {
	  		ingredients: ['Tomato', 'Cheese']
	  	};
			chai.request(server)
		    .post('/api/recipes')
		    .send(recipe)
		    .end((err, res) => {
			  	res.should.have.status(404);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('success').eql(false);
		      done();
		    });
		});
		
	  it('it should POST a recipe ', done => {
	  	const recipe = {
        name: 'Pasta',
	  		ingredients: ['Tomato', 'Cheese']
	  	};
			chai.request(server)
		    .post('/api/recipes')
		    .send(recipe)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('name').eql('Pasta');
					res.body.should.have.property('ingredients');
					res.body.ingredients.should.be.a('array');
					res.body.ingredients.length.should.be.eql(2);
		      done();
		    });
	  });
	});
	
	//Test the /GET/:id route
  describe('/GET/:id recipe', () => {
	  it('it should GET a recipe by the given id', done => {
			const recipe = new Recipe({
        name: 'Pasta',
	  		ingredients: ['Tomato', 'Cheese']
	  	});
	  	recipe.save((err,recipe) => {
	  		chai.request(server)
		    .get('/api/recipes/' + recipe.id)
		    .send(recipe)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('name');
			  	res.body.should.have.property('ingredients');
					res.body.ingredients.should.be.a('array');
					res.body.ingredients.length.should.be.eql(2);
			  	res.body.should.have.property('_id').eql(recipe.id);
		      done();
		    });
	  	});
	  });
	});
	
	// Test the /PUT route
	describe('/PUT/:id recipe', () => {
	  it('it should UPDATE a recipe given the id', done => {
			const recipe = new Recipe({
        name: 'Pasta',
	  		ingredients: ['Tomato', 'Cheese']
	  	});
			recipe.save((err, recipe) => {
				chai.request(server)
			    .put('/api/recipes/' + recipe.id)
			    .send({
						name: 'Pizza',
						ingredients: ['Tomato', 'Cheese']
					})
			    .end((err, res) => {
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('name').eql('Pizza');
						res.body.should.have.property('ingredients');
						res.body.ingredients.should.be.a('array');
						res.body.ingredients.length.should.be.eql(2);
			      done();
			    });
		  });
	  });
	});
	
	// Test the /DELETE route
	describe('/DELETE/:id recipe', () => {
		it('it should DELETE a recipe given the id', done => {
			const recipe = new Recipe({
        name: 'Pasta',
	  		ingredients: ['Tomato', 'Cheese']
			});
			recipe.save((err, recipe) => {
				chai.request(server)
					.delete('/api/recipes/' + recipe.id)
					.end((err, res) => {
						res.should.have.status(200);	
						res.body.should.be.a('object');
						res.body.should.have.property('success').eql(true);
						done();
					});
			});
		});
	});
});