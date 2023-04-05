const router = requre("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Incorrect Route."));

module.exports = router;
