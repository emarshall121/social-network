const router = require('express').Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// Routes for /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// Routes for /api/users/:userId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;
