const router = require('express').Router();

const {
  getAllThoughts,
  addThought,
  addReaction,
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
  .route('/:thoughtId/reactions').post(addReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)


  module.exports = router;