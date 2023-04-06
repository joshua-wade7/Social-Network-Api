const router = require("express").Router();
//declare a variable that will be = to an {} that will destructure each of the functions within the userController.js
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addNewUserFriend,
  removeFriend,
} = require("../../controllers/userController");
// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addNewUserFriend)
  .delete(removeFriend);
// look at mini project/homework for how to structure this once userController.js is complete.

module.exports = router;
