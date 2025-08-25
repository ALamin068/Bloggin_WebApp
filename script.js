class BlogApp {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        this.currentEditId = null;
        this.filteredPosts = [...this.posts];
        this.categories = new Set();
        this.initializeElements();
        this.bindEvents();
        this.loadTheme();
        this.updateCategories();
        this.renderPosts();
    }

    initializeElements() {
        this.homeBtn = document.getElementById('home-btn');
        this.newPostBtn = document.getElementById('new-post-btn');
        this.homeSection = document.getElementById('home-section');
        this.newPostSection = document.getElementById('new-post-section');
        this.postsContainer = document.getElementById('posts-container');
        this.postForm = document.getElementById('post-form');
        this.postTitle = document.getElementById('post-title');
        this.postContent = document.getElementById('post-content');
        this.postCategory = document.getElementById('post-category');
        this.postTags = document.getElementById('post-tags');
        this.submitBtn = document.getElementById('submit-btn');
        this.cancelBtn = document.getElementById('cancel-btn');
        this.formTitle = document.getElementById('form-title');
        this.searchInput = document.getElementById('search-input');
        this.categoryFilter = document.getElementById('category-filter');
        this.exportBtn = document.getElementById('export-btn');
        this.importBtn = document.getElementById('import-btn');
        this.importFile = document.getElementById('import-file');
        this.themeToggle = document.getElementById('theme-toggle');
        this.notification = document.getElementById('notification');
    }

    bindEvents() {
        this.homeBtn.addEventListener('click', () => this.showSection('home'));
        this.newPostBtn.addEventListener('click', () => this.showSection('new-post'));
        this.postForm.addEventListener('submit', (e) => this.handleSubmit(e));
        this.cancelBtn.addEventListener('click', () => this.cancelEdit());
        this.searchInput.addEventListener('input', () => this.filterPosts());
        this.categoryFilter.addEventListener('change', () => this.filterPosts());
        this.exportBtn.addEventListener('click', () => this.exportPosts());
        this.importBtn.addEventListener('click', () => this.importFile.click());
        this.importFile.addEventListener('change', (e) => this.importPosts(e));
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    showSection(section) {
        this.homeBtn.classList.toggle('active', section === 'home');
        this.newPostBtn.classList.toggle('active', section === 'new-post');
        
        this.homeSection.classList.toggle('hidden', section !== 'home');
        this.newPostSection.classList.toggle('hidden', section !== 'new-post');

        if (section === 'new-post' && this.currentEditId === null) {
            this.resetForm();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const title = this.postTitle.value.trim();
        const content = this.postContent.value.trim();
        const category = this.postCategory.value;
        const tags = this.postTags.value.split(',').map(tag => tag.trim()).filter(tag => tag);
        
        if (!title || !content) {
            this.showNotification('Please fill in both title and content', 'error');
            return;
        }

        if (this.currentEditId !== null) {
            this.updatePost(this.currentEditId, title, content, category, tags);
        } else {
            this.createPost(title, content, category, tags);
        }

        this.resetForm();
        this.showSection('home');
    }

    createPost(title, content, category, tags) {
        const post = {
            id: Date.now(),
            title,
            content,
            category: category || 'Uncategorized',
            tags: tags || [],
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            timestamp: Date.now(),
            wordCount: this.countWords(content),
            readingTime: this.calculateReadingTime(content)
        };

        this.posts.unshift(post);
        this.savePosts();
        this.updateCategories();
        this.filterPosts();
        this.showNotification('Post created successfully!', 'success');
    }

    updatePost(id, title, content, category, tags) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = {
                ...this.posts[postIndex],
                title,
                content,
                category: category || 'Uncategorized',
                tags: tags || [],
                wordCount: this.countWords(content),
                readingTime: this.calculateReadingTime(content)
            };
            this.savePosts();
            this.updateCategories();
            this.filterPosts();
            this.showNotification('Post updated successfully!', 'success');
        }
        this.currentEditId = null;
    }

    deletePost(id) {
        if (confirm('Are you sure you want to delete this post?')) {
            this.posts = this.posts.filter(post => post.id !== id);
            this.savePosts();
            this.updateCategories();
            this.filterPosts();
            this.showNotification('Post deleted successfully!', 'success');
        }
    }

    editPost(id) {
        const post = this.posts.find(post => post.id === id);
        if (post) {
            this.currentEditId = id;
            this.postTitle.value = post.title;
            this.postContent.value = post.content;
            this.postCategory.value = post.category;
            this.postTags.value = post.tags ? post.tags.join(', ') : '';
            this.formTitle.textContent = 'Edit Post';
            this.submitBtn.textContent = 'Update Post';
            this.showSection('new-post');
        }
    }

    cancelEdit() {
        this.currentEditId = null;
        this.resetForm();
        this.showSection('home');
    }

    resetForm() {
        this.postTitle.value = '';
        this.postContent.value = '';
        this.postCategory.value = '';
        this.postTags.value = '';
        this.formTitle.textContent = 'Create New Post';
        this.submitBtn.textContent = 'Publish Post';
        this.currentEditId = null;
    }

    filterPosts() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const selectedCategory = this.categoryFilter.value;

        this.filteredPosts = this.posts.filter(post => {
            const matchesSearch = 
                post.title.toLowerCase().includes(searchTerm) ||
                post.content.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm));

            const matchesCategory = 
                !selectedCategory || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        this.renderPosts();
    }

    updateCategories() {
        this.categories.clear();
        this.posts.forEach(post => {
            if (post.category) {
                this.categories.add(post.category);
            }
        });

        const currentValue = this.categoryFilter.value;
        this.categoryFilter.innerHTML = '<option value="">All Categories</option>';
        
        Array.from(this.categories).sort().forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categoryFilter.appendChild(option);
        });

        this.categoryFilter.value = currentValue;
    }

    renderPosts() {
        if (this.filteredPosts.length === 0) {
            const message = this.posts.length === 0 
                ? 'No posts yet. Create your first blog post to get started!'
                : 'No posts match your search criteria.';
            
            this.postsContainer.innerHTML = `
                <div class="no-posts">
                    <h2>No posts found</h2>
                    <p>${message}</p>
                </div>
            `;
        } else {
            this.postsContainer.innerHTML = this.filteredPosts.map(post => `
                <article class="post">
                    <div class="post-header">
                        <div>
                            <h3>${this.escapeHtml(post.title)}</h3>
                            <div class="post-meta">
                                <div class="post-date">${post.date}</div>
                                ${post.category ? `<div class="post-category">${post.category}</div>` : ''}
                                <div class="post-stats">
                                    <span>${post.wordCount} words</span>
                                    <span>${post.readingTime} min read</span>
                                </div>
                            </div>
                            ${post.tags && post.tags.length > 0 ? `
                                <div class="post-tags">
                                    ${post.tags.map(tag => `<span class="tag">${this.escapeHtml(tag)}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                        <div class="post-actions">
                            <button class="btn btn-edit" onclick="app.editPost(${post.id})">Edit</button>
                            <button class="btn btn-delete" onclick="app.deletePost(${post.id})">Delete</button>
                        </div>
                    </div>
                    <div class="post-content">${this.escapeHtml(post.content)}</div>
                </article>
            `).join('');
        }
    }

    countWords(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    calculateReadingTime(text) {
        const wordsPerMinute = 200;
        const wordCount = this.countWords(text);
        return Math.ceil(wordCount / wordsPerMinute) || 1;
    }

    exportPosts() {
        if (this.posts.length === 0) {
            this.showNotification('No posts to export!', 'error');
            return;
        }

        const dataStr = JSON.stringify({
            posts: this.posts,
            exportDate: new Date().toISOString(),
            version: '1.0'
        }, null, 2);
        
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `blog-posts-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showNotification('Posts exported successfully!', 'success');
    }

    importPosts(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                let postsToImport = [];

                if (data.posts && Array.isArray(data.posts)) {
                    postsToImport = data.posts;
                } else if (Array.isArray(data)) {
                    postsToImport = data;
                } else {
                    throw new Error('Invalid file format');
                }

                if (postsToImport.length === 0) {
                    this.showNotification('No posts found in file!', 'error');
                    return;
                }

                const existingIds = new Set(this.posts.map(post => post.id));
                let importedCount = 0;

                postsToImport.forEach(post => {
                    if (!existingIds.has(post.id)) {
                        const newPost = {
                            id: post.id || Date.now() + Math.random(),
                            title: post.title || 'Untitled',
                            content: post.content || '',
                            category: post.category || 'Uncategorized',
                            tags: post.tags || [],
                            date: post.date || new Date().toLocaleDateString(),
                            timestamp: post.timestamp || Date.now(),
                            wordCount: post.wordCount || this.countWords(post.content || ''),
                            readingTime: post.readingTime || this.calculateReadingTime(post.content || '')
                        };
                        this.posts.push(newPost);
                        importedCount++;
                    }
                });

                this.posts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                this.savePosts();
                this.updateCategories();
                this.filterPosts();
                
                this.showNotification(`Imported ${importedCount} posts successfully!`, 'success');
            } catch (error) {
                this.showNotification('Error importing posts. Please check the file format.', 'error');
                console.error('Import error:', error);
            }
        };

        reader.readAsText(file);
        event.target.value = '';
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        this.themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkTheme', isDark);
    }

    loadTheme() {
        const isDark = localStorage.getItem('darkTheme') === 'true';
        if (isDark) {
            document.body.classList.add('dark-theme');
            this.themeToggle.textContent = '☀️';
        }
    }

    showNotification(message, type = 'info') {
        this.notification.textContent = message;
        this.notification.className = `notification ${type}`;
        this.notification.classList.remove('hidden');
        this.notification.classList.add('show');

        setTimeout(() => {
            this.notification.classList.remove('show');
            setTimeout(() => {
                this.notification.classList.add('hidden');
            }, 300);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
    }
}

const app = new BlogApp();