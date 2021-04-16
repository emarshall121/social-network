const router = require('express').Router();

// Routes for /api/thoughts
router 
  .route('/')
  .get('getAllThoughts')
  .post('create')

// Routes for /api/thoughts/:id
router
  .get(getThoughtById)