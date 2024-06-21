document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
  
      if (!username || !title || !content) {
        errorMessage.textContent = 'All fields are required.';
        return;
      }
  
      const post = { username, title, content };
      savePost(post);
  
      window.location.href = 'blog.html';
    });
  
    function savePost(post) {
      const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      posts.push(post);
      localStorage.setItem('blogPosts', JSON.stringify(posts));
    }
  });