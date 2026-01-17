import React from "react";
import axios from "axios";

const TestApi = () => {

  // TASK 1: GET REQUEST
  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("First 5 posts:", res.data.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  // TASK 2 + 3: POST + ERROR
  const handleLogin = async () => {
  try {
    const res = await axios.post(
      "https://reqres.in/api/login",
      {
        email: "eve.holt@reqres.in",
        password: "wrongpassword"
      }
    );
    console.log("Token:", res.data.token);
  } catch (error) {
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Error:", error.response.data);
    } else if (error.request) {
      console.log("Request sent but no response received");
    } else {
      console.log("Error:", error.message);
    }
  }
};

  return (
    <div>
      <h2>API Practice</h2>

      <button onClick={fetchPosts}>
        Fetch Posts
      </button>

      <br /><br />

      <button onClick={handleLogin}>
        Login Test
      </button>
      <button onClick={() => console.log("Button clicked")}>Fetch Posts</button>
    </div>
  );
};

export default TestApi;
