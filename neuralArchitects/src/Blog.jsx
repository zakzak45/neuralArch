import { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of Game Development with AI",
            excerpt: "How artificial intelligence is revolutionizing game design and player experiences. Explore the cutting-edge techniques that are transforming the gaming industry.",
            fullContent: "Artificial Intelligence is fundamentally changing how games are created and experienced. From procedural content generation to adaptive difficulty systems, AI is enabling developers to create more immersive and personalized gaming experiences...",
            date: "Nov 15, 2025",
            author: "Game Dev Team",
            category: "Game Dev",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
            readTime: "5 min read",
            tags: ["AI", "Game Development", "Machine Learning"]
        },
        {
            id: 2,
            title: "Computer Vision in Real-World Applications",
            excerpt: "Exploring cutting-edge computer vision techniques and their practical implementations across various industries including healthcare, automotive, and security.",
            fullContent: "Computer vision technology has matured significantly, enabling breakthrough applications across multiple sectors. From medical image analysis to autonomous vehicles, CV systems are becoming increasingly sophisticated and reliable...",
            date: "Nov 10, 2025",
            author: "AI Research Team",
            category: "Computer Vision",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
            readTime: "7 min read",
            tags: ["Computer Vision", "AI", "Deep Learning"]
        },
        {
            id: 3,
            title: "Building Embedded Systems for IoT",
            excerpt: "Best practices for developing robust embedded systems and IoT solutions. Learn about hardware selection, power optimization, and reliable communication protocols.",
            fullContent: "The Internet of Things continues to grow exponentially, creating demand for well-designed embedded systems. This article covers essential considerations for building reliable, efficient IoT devices...",
            date: "Nov 5, 2025",
            author: "Hardware Team",
            category: "Embedded Systems",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
            readTime: "6 min read",
            tags: ["IoT", "Embedded Systems", "Hardware"]
        },
        {
            id: 4,
            title: "Advanced Rendering Techniques in Modern Games",
            excerpt: "Dive deep into ray tracing, global illumination, and other advanced rendering techniques that are pushing the boundaries of visual fidelity in games.",
            fullContent: "Modern game engines leverage sophisticated rendering pipelines to achieve photorealistic graphics. This article explores the mathematics and implementation details behind cutting-edge rendering techniques...",
            date: "Nov 1, 2025",
            author: "Graphics Team",
            category: "Game Dev",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            readTime: "8 min read",
            tags: ["Graphics", "Rendering", "Game Dev"]
        },
        {
            id: 5,
            title: "Neural Networks for Image Classification",
            excerpt: "Understanding convolutional neural networks and their application in image classification tasks. From basic concepts to advanced architectures.",
            fullContent: "Convolutional Neural Networks have revolutionized image classification. This comprehensive guide walks through the fundamentals and explores state-of-the-art architectures...",
            date: "Oct 28, 2025",
            author: "ML Team",
            category: "Computer Vision",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
            readTime: "10 min read",
            tags: ["Neural Networks", "CNN", "Image Classification"]
        },
        {
            id: 6,
            title: "Optimizing Battery Life in Embedded Devices",
            excerpt: "Practical strategies for minimizing power consumption in battery-powered embedded systems. Hardware and software techniques for maximum efficiency.",
            fullContent: "Power optimization is critical for battery-operated devices. This article presents proven techniques for extending battery life through smart hardware choices and efficient software design...",
            date: "Oct 25, 2025",
            author: "Embedded Team",
            category: "Embedded Systems",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
            readTime: "6 min read",
            tags: ["Power Management", "Embedded", "Optimization"]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Game Dev', 'Computer Vision', 'Embedded Systems'];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <h1 className="page-title">Our Blog</h1>
                <p className="page-subtitle">
                    Insights, tutorials, and updates from our team on game development, AI, and embedded systems
                </p>
            </section>

            <section className="blog-content">
                <div className="filter-container">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="blog-grid">
                    {filteredPosts.map((post, index) => (
                        <article key={post.id} className="blog-card-full" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="blog-image-container">
                                <img src={post.image} alt={post.title} className="blog-image" />
                                <div className="blog-category-badge">{post.category}</div>
                            </div>
                            <div className="blog-content-area">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-tags">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="blog-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="blog-footer">
                                    <span className="blog-author">By {post.author}</span>
                                    <a href="#" className="read-more-btn">
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
