const express = require("express");
const router = express.Router();

// Group data (mock or dynamic)
const groups = [
    { id: 1, name: "Tech Enthusiasts", description: "For tech lovers!", members: 120 },
    { id: 2, name: "Book Club", description: "Discuss books and literature.", members: 90 },
];

// Route to get all groups
router.get("/", (req, res) => {
    res.render("groups", { groups }); // Assuming you have a 'groups.ejs' file
});

// Route to get a specific group
router.get("/:id", (req, res) => {
    const group = groups.find((g) => g.id === parseInt(req.params.id));
    if (group) {
        res.render("groupDetails", { group }); // Assuming you have a 'groupDetails.ejs' file
    } else {
        res.status(404).send("Group not found");
    }
});

module.exports = router;
