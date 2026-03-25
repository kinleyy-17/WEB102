// utils/mockData.js

const users = [
  {
    id: "1",
    username: "traveler",
    full_name: "Karma",
    email: "karma@example.com",
    profile_picture: "https://example.com/profiles/karma.jpg",
    bio: "Travel photographer",
    created_at: "2023-01-15"
  },
  {
    id: "2",
    username: "nature_lover",
    full_name: "Dechen",
    email: "dechen@example.com",
    profile_picture: "https://example.com/profiles/dechen.jpg",
    bio: "Hiking enthusiast and nature lover",
    created_at: "2023-02-10"
  },
  {
    id: "3",
    username: "foodie_bhutan",
    full_name: "Tashi",
    email: "tashi@example.com",
    profile_picture: "https://example.com/profiles/tashi.jpg",
    bio: "Exploring the best flavors of Bhutan",
    created_at: "2023-03-05"
  }
];

const posts = [
  {
    id: "1",
    user_id: "1",
    caption: "A beautiful morning in Paro Valley! #Bhutan #Travel",
    image: "https://example.com/posts/paro.jpg",
    created_at: "2023-05-20"
  },
  {
    id: "2",
    user_id: "2",
    caption: "Reaching the summit was worth it.",
    image: "https://example.com/posts/hike.jpg",
    created_at: "2023-06-12"
  }
];

const comments = [
  {
    id: "1",
    post_id: "1",
    user_id: "2",
    text: "This view is breathtaking!",
    created_at: "2023-05-20"
  },
  {
    id: "2",
    post_id: "1",
    user_id: "3",
    text: "I need to visit this place soon.",
    created_at: "2023-05-21"
  }
];

const likes = [
  { id: "1", post_id: "1", user_id: "2" },
  { id: "2", post_id: "1", user_id: "3" },
  { id: "3", post_id: "2", user_id: "1" }
];

const followers = [
  { id: "1", follower_id: "2", following_id: "1" }, // Dechen follows Karma
  { id: "2", follower_id: "3", following_id: "1" }, // Tashi follows Karma
  { id: "3", follower_id: "1", following_id: "2" }  // Karma follows Dechen
];

module.exports = {
  users,
  posts,
  comments,
  likes,
  followers
};