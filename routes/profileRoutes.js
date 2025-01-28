const express = require("express");
const router = express.Router();

// Edit Profile Page
router.get("/editProfile", (req, res) => {
  res.render("editProfile"); // Renders the editProfile.ejs view
});

router.post("/editProfile", (req, res) => {
  const { username, email, bio } = req.body;
  console.log("Profile Updated:", { username, email, bio });

  // Example database update logic (replace with actual implementation)
  // User.updateOne({ _id: req.user.id }, { username, email, bio }, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send("Error updating profile.");
  //   }
  //   res.redirect("/profile");
  // });

  res.redirect("/profile"); // Redirect back to the profile page
});

module.exports = router;
