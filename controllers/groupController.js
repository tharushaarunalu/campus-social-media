// controllers/groupController.js

const Group = require('../models/group');

// Get all groups to display on the group discovery page
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.render('groups', { groups });
  } catch (err) {
    res.status(500).send('Error retrieving groups');
  }
};

// Show the create group page
exports.createGroupPage = (req, res) => {
  res.render('createGroup');
};

// Handle creating a new group
exports.createGroup = async (req, res) => {
  const { name, description, image, members } = req.body;
  try {
    const newGroup = new Group({ name, description, image, members });
    await newGroup.save();
    res.redirect('/groups');  // Redirect to the group listing page
  } catch (err) {
    res.status(500).send('Error creating group');
  }
};

// Search for groups based on query
exports.searchGroups = async (req, res) => {
  const query = req.query.query;
  try {
    const groups = await Group.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });
    res.render('groups', { groups });
  } catch (err) {
    res.status(500).send('Error searching groups');
  }
};

// View details of a specific group
exports.viewGroup = async (req, res) => {
  const groupId = req.params.id;
  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).send('Group not found');
    }
    res.render('groupDetail', { group });
  } catch (err) {
    res.status(500).send('Error retrieving group details');
  }
};
