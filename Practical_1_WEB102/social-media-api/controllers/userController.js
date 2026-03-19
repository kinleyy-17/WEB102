const data = require('../utils/mockData');

// GET all users
exports.getUsers = (req, res) => {
  res.status(200).json({ success: true, data: data.users });
};

// GET single user
exports.getUser = (req, res) => {
  const user = data.users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ success: false });
  res.status(200).json({ success: true, data: user });
};

// CREATE user
exports.createUser = (req, res) => {
  const newUser = { id: data.users.length + 1, ...req.body };
  data.users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
};

// UPDATE user
exports.updateUser = (req, res) => {
  const user = data.users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ success: false });

  Object.assign(user, req.body);
  res.status(200).json({ success: true, data: user });
};

// DELETE user
exports.deleteUser = (req, res) => {
  const index = data.users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ success: false });

  data.users.splice(index, 1);
  res.status(200).json({ success: true });
};