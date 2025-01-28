const express = require("express");
const router = express.Router();

// Edit Profile Page
router.post("/up", (req, res) => {
  const { username, email, bio } = req.body;
  console.log("Profile Updated:", { username, email, bio });

  // Here, you can update the database with the new profile data
  res.redirect("/"); // Redirect back to the profile page
});


module.exports = router;
