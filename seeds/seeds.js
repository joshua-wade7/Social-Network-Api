const userData = [
  {
    username: "Dena",
    email: "dabbets0@stanford.edu",
  },
  {
    username: "Kailey",
    email: "kstammers1@qq.com",
  },
  {
    username: "Sayer",
    email: "salexandersson2@paypal.com",
  },
  {
    username: "Maxi",
    email: "mcorkett3@jugem.jp",
  },
  {
    username: "Sybila",
    email: "skingswold4@virginia.edu",
  },
];

const thoughts = [
  {
    thoughtText: "matrix value-added e-services",
  },
  {
    thoughtText: "transform web-enabled convergence",
  },
  {
    thoughtText: "monetize mission-critical e-commerce",
  },
  {
    thoughtText: "recontextualize magnetic infomediaries",
  },
  {
    thoughtText: "leverage customized infrastructures",
  },
  {
    thoughtText: "orchestrate viral metrics",
  },
  {
    thoughtText: "scale plug-and-play partnerships",
  },
  {
    thoughtText: "harness one-to-one e-services",
  },
  {
    thoughtText: "drive robust applications",
  },
  {
    thoughtText: "engage web-enabled systems",
  },
];

const reactions = [
  {
    reactionBody: "toolset",
  },
  {
    reactionBody: "24 hour",
  },
  {
    reactionBody: "alliance",
  },
  {
    reactionBody: "infrastructure",
  },
  {
    reactionBody: "object-oriented",
  },
  {
    reactionBody: "internet solution",
  },
  {
    reactionBody: "success",
  },
  {
    reactionBody: "composite",
  },
  {
    reactionBody: "Upgradable",
  },
  {
    reactionBody: "Organic",
  },
  {
    reactionBody: "logistical",
  },
  {
    reactionBody: "Distributed",
  },
  {
    reactionBody: "service-desk",
  },
  {
    reactionBody: "Up-sized",
  },
  {
    reactionBody: "Progressive",
  },
  {
    reactionBody: "intranet",
  },
  {
    reactionBody: "intangible",
  },
  {
    reactionBody: "6th generation",
  },
  {
    reactionBody: "transitional",
  },
  {
    reactionBody: "flexibility",
  },
];

// const connection = require("../config/connection");
// const { User, Thought } = require("../models");

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");

//   // Drop existing thoughts
//   await Thought.deleteMany({});

//   // Drop existing students
//   await User.deleteMany({});

//   const users = await User.insertMany(userData);

//   Thought.create(req.body)
//   .then((thought) => {
//     return User.findOneAndUpdate(
//       { _id: req.body.userId },
//       { $push: { thoughts: thought._id } },
//       { new: true }
//     );
//   })

//   console.info("Seeding complete! 🌱");
//   process.exit(0);
// });
