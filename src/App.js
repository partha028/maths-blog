import React, { useState } from 'react';
import './App.css';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import postsData from './posts';

const POSTS_PER_PAGE = 3;

function Post({ post }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{showMore ? post.content : `${post.content.substring(0, 100)}...`}</p>
      
      {post.formula && <BlockMath math={post.formula} />}
      {post.example && <p className="example">Example: {post.example}</p>}
      
      <button className="read-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = postsData.filter(post => 
    (filter === 'All' || post.category === filter) &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
     post.content.toLowerCase().includes(search.toLowerCase()) ||
     (post.example && post.example.toLowerCase().includes(search.toLowerCase())))
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
<header>
  <h1>Maths Blog</h1>
  <p className="subheading">
    Algebra, Geometry, Calculus, Trigonometry — step-by-step explanations & example sums
  </p>
  <p className="intro">
    Our blog helps students and enthusiasts master math concepts with easy-to-understand examples and interactive formulas.
  </p>
  <div className="header-buttons">
    <button onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>
      View All Posts
    </button>
    <button onClick={() => alert('Filter by popular topics coming soon!')}>
      Popular Topics
    </button>
  </div>
  <input
    type="text"
    placeholder="Search posts..."
    value={search}
    onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
    className="search-bar"
  />
</header>


      <nav>
        {['All', 'Algebra', 'Geometry', 'Trigonometry', 'Calculus'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => { setFilter(cat); setCurrentPage(1); }}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="container">
        {displayedPosts.map(post => <Post key={post.id} post={post} />)}
        {displayedPosts.length === 0 && <p>No posts found.</p>}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i+1}
            className={currentPage === i+1 ? 'active' : ''}
            onClick={() => setCurrentPage(i+1)}
          >
            {i+1}
          </button>
        ))}
      </div>

      <footer>
        <p>&copy; 2025 Maths Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
