const router = require("express").Router();

//declare a variable that is = to an {} that will destructure the functions from the thoughtRoutes
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thoughtController");
// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(removeReaction);
//establish the remaining routes necessary for the functions established in thoughtController

module.exports = router;
