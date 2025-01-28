const express = require("express");
const router = express.Router();

// Mock data for friends, requests, and search results
let friends = [
    { id: 1, name: "Alice", lastSeen: "Online", profilePicture: "/images/user1.png" },
    { id: 2, name: "Bob", lastSeen: "2 hours ago", profilePicture: "/images/user2.png" },
    { id: 3, name: "Charlie", lastSeen: "Offline", profilePicture: "/images/user3.png" },
];

let incomingRequests = [
    { id: 4, name: "David", profilePicture: "/images/user4.png" },
];

let outgoingRequests = [
    { id: 5, name: "Emma", profilePicture: "/images/user5.png" },
];

let searchResults = [];

// Friend list
router.get("/", (req, res) => {
    res.render("friends", { friends });
});

// Friend requests
router.get("/requests", (req, res) => {
    res.render("friendRequests", { incomingRequests, outgoingRequests });
});

// Handle search for friends
router.get("/search", (req, res) => {
    const query = req.query.query || "";
    searchResults = friends.filter(friend =>
        friend.name.toLowerCase().includes(query.toLowerCase())
    );
    res.render("searchFriends", { searchResults, query });
});

// Handle friend actions (Mock functionality)
router.post("/add", (req, res) => {
    const { name } = req.body;
    friends.push({ id: friends.length + 1, name, lastSeen: "Online", profilePicture: "/images/default.png" });
    res.redirect("/friends");
});

router.post("/unfriend/:id", (req, res) => {
    const id = parseInt(req.params.id);
    friends = friends.filter(friend => friend.id !== id);
    res.redirect("/friends");
});

router.post("/accept/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const acceptedRequest = incomingRequests.find(req => req.id === id);
    if (acceptedRequest) {
        friends.push({ ...acceptedRequest, lastSeen: "Online" });
        incomingRequests = incomingRequests.filter(req => req.id !== id);
    }
    res.redirect("/friends/requests");
});

router.post("/decline/:id", (req, res) => {
    const id = parseInt(req.params.id);
    incomingRequests = incomingRequests.filter(req => req.id !== id);
    res.redirect("/friends/requests");
});

module.exports = router;
