import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 10));
    } catch (err) {
      setError("Failed to load posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Dashboard Posts</h2>

      {loading && <p>Loading posts...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error &&
        posts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))
      }
    </div>
  );
};

export default Dashboard;
