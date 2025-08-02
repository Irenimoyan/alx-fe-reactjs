import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the search query
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

    const response = await axios.get(url);
    return response.data.items; // Array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};


