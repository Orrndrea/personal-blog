document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const postsContainer = document.getElementById('posts-container');
  
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    function loadPosts() {
      const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      postsContainer.innerHTML = posts.map(post => `
        <div class="post">
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><strong>Author:</strong> ${post.username}</p>
        </div>
      `).join('');
    }
  
    loadPosts();
  });
  