const router = require('express').Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// Routes for /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

  // Routes for /api/users/:id
  router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

    module.exports = router;
