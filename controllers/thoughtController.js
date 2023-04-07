//require in the models needed to transact against
const { Thought, User } = require("../models");
// /api/thoughts
module.exports = {
  //GET route to get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //GET route to get a single thought by its _id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //POST route to create a new thought (need to push created thought's _id to the associated user's thoughts array field)
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created, but found no user with that ID",
            })
          : res.json("Created the thought")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    // .then((user) => res.json(user))
    // .catch((err) => res.status(500).json(err));
  },
  //PUT route to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that Id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //DELETE route to remove a thought by its _id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that Id" })
          : Thought.deleteOne({ _id: req.params.thoughtId })
      )
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // /api/thoughts/:thoughtId/reactions

  //POST route to create a reaction stored in a single thought's reactions array field
  addReaction(req, res) {
    console.log("You added a new reaction");
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that Id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //DELETE route to pull and remove a reaction by the reactions reactionId value
  removeReaction(req, res) {
    // Thought.findOneAndRemove({ _id: req.params.reactionId})
    // .then((thought) =>
    // !thought
    // ? res.status(404).json({ message: "No reaction with that Id"})

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No reaction found by that Id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

//construct all the routes necessary to hit.  Look at mini project for guidance.
