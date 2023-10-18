import React, { useState } from "react";
import BlogPost from "./BlogPost";
import quotes from "./quotes.json";
const blogPosts = [
  {
    title : "Post Title- The Art of Self-Care",
    content :
      "Embracing the power of self-compassion and mindfulness, we can cultivate a healthier, more balanced life. By nurturing our emotional well-being and attending to our physical needs, we can foster a sense of inner peace and resilience", author: "Dr. Jane Smith",
  },
  {
    title: "Post Title - The Significance of Sleep ",
    content:
      " Adequate sleep is crucial for optimal health and well-being. It plays a vital role in regulating our physiological processes, maintaining our cognitive function, and promoting emotional stability. To ensure optimal sleep, it is essential to establish a consistent sleep schedule, create a conducive sleep environment, and adhere to healthy sleep habits.", author : "Professor John Doe",
  },
  {
    title: "Post Title- The Importance of Gratitude",
    content:
      "Cultivating an attitude of gratitude can significantly improve our mental and emotional well-being. By regularly reflecting on the positive aspects of our lives and expressing gratitude for the blessings we receive, we can cultivate a more appreciative and content mindset. In conclusion, self-care encompasses a multitude of practices that contribute to our overall well-being. By prioritizing self-compassion, mindfulness, and gratitude, we can cultivate a healthier, more balanced life. By attending to our emotional, physical, and spiritual needs, we can foster a sense of inner peace and resilience, ultimately leading to a more fulfilling and meaningful existence.", author : "Dr. Sarah Johnson",
  },
];
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function BlogList() {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (index) => {
    setSelectedPost(blogPosts[index]);
  };
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index} onClick={() => handlePostClick(index)}>
            {post.title}{" "}
          </li>
        ))}
      </ul>
      {selectedPost && (
        <BlogPost
          title={selectedPost.title}
          content={`${getRandomQuote()} ${selectedPost.content}`}
          author={selectedPost.author}
        />
      )}
    </div>
  );
}
export default BlogList;
