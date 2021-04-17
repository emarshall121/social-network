const router = require('express').Router();

const {
  getAllThoughts,
  addThought,
  addReply,
  removeThought,
  removeReaction,
  getThoughtById,
  updateThought
} = require ('../../controllers/thought-controller');

// Routes for /api/thoughts
router 
  .route('/:userId')
  .get(getAllThoughts)
  .post(addThought)

// Routes for /api/thoughts/:thoughtId
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .delete(removeThought)
  .put(updateThought)

router
  .route('/:thoughtId')


  module.exports = router;