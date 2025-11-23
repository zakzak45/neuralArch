import { useState } from 'react';
import './Home.css';

const Home = () => {
    const [projects] = useState([
        {
            id: 1,
            title: "Immersive 3D RPG Game",
            description: "Open-world role-playing game with advanced AI NPCs and real-time combat systems",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=300&fit=crop",
            category: "Game Dev"
        },
        {
            id: 2,
            title: "Real-Time Object Detection",
            description: "Computer vision system for autonomous navigation and object tracking",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop",
            category: "Computer Vision"
        },
        {
            id: 3,
            title: "Multiplayer Battle Arena",
            description: "Competitive online multiplayer game with custom networking and matchmaking",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
            category: "Game Dev"
        },
        {
            id: 4,
            title: "Facial Recognition AI",
            description: "Advanced facial recognition system with emotion detection capabilities",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
            category: "Computer Vision"
        },
        {
            id: 5,
            title: "IoT Smart Home System",
            description: "Embedded systems integration for automated home control and monitoring",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=300&fit=crop",
            category: "Embedded Systems"
        },
        {
            id: 6,
            title: "VR Gaming Experience",
            description: "Immersive virtual reality game with haptic feedback and motion tracking",
            image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=300&fit=crop",
            category: "Game Dev"
        }
    ]);

    const [blogPosts] = useState([
        {
            id: 1,
            title: "The Future of Game Development with AI",
            excerpt: "How artificial intelligence is revolutionizing game design and player experiences...",
            date: "Nov 15, 2025",
            link: "https://www.gamedeveloper.com/",
            author: "Game Dev Team"
        },
        {
            id: 2,
            title: "Computer Vision in Real-World Applications",
            excerpt: "Exploring cutting-edge computer vision techniques and their practical implementations...",
            date: "Nov 10, 2025",
            link: "https://towardsdatascience.com/",
            author: "AI Research Team"
        },
        {
            id: 3,
            title: "Building Embedded Systems for IoT",
            excerpt: "Best practices for developing robust embedded systems and IoT solutions...",
            date: "Nov 5, 2025",
            link: "https://www.embedded.com/",
            author: "Hardware Team"
        }
    ]);

    const [activeFilter, setActiveFilter] = useState('All');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const categories = ['All', 'Game Dev', 'Computer Vision', 'Embedded Systems'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section id="home" className="hero-section fade-in">
                <div className="hero-content">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                    <h1 className="hero-title">
                        Crafting Immersive Games &
                        <span className="gradient-text"> Intelligent Vision Systems</span>
                    </h1>
                    <p className="hero-subtitle">
                        Specializing in game development, computer vision AI, and embedded systems - transforming ideas into interactive experiences
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                        >
                            View Our Work
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                        >
                            Start a Project
                        </button>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="animated-gradient-bg"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="about" className="stats-section">
                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-number" data-target="XX">XX+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number" data-target="XX">XX+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number" data-target="XX">XX+</div>
                        <div className="stat-label">Team Members</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number" data-target="XX">XX+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Showcasing our latest innovations and achievements</p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <button className="view-project-btn">View Details</button>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Admin Note */}
                <div className="admin-note">
                    <div className="admin-icon">🔒</div>
                    <p>Admin-only: Projects are managed through the admin panel</p>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="blog-section">
                <div className="section-header">
                    <h2 className="section-title">Latest from Our Blog</h2>
                    <p className="section-subtitle">Insights, tutorials, and industry news</p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <a
                            href={post.link}
                            key={post.id}
                            className="blog-card"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="blog-card-header">
                                <span className="blog-date">{post.date}</span>
                                <span className="blog-author">{post.author}</span>
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <div className="blog-link-wrapper">
                                <span className="read-more">Read More</span>
                                <span className="arrow">→</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="blog-cta">
                    <button className="btn btn-outline">View All Articles</button>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Have a project in mind? Let's talk about it</p>
                    </div>

                    <div className="contact-content">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-info-card">
                                <div className="contact-icon">📧</div>
                                <h3>Email Us</h3>
                                <a href="mailto:laughingpawn@gmail.com">laughingpawn@gmail.com</a>
                            </div>
                            <div className="contact-info-card">
                                <div className="contact-icon">📱</div>
                                <h3>Call Us</h3>
                                <a href="tel:+27 726 979 561">+27(726) 979 561</a>
                            </div>
                            <div className="contact-info-card">
                                <div className="contact-icon">📍</div>
                                <h3>Visit Us</h3>
                                <p>Johannesburg<br />South Africa</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form
                            className="contact-form"
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const formElement = e.target;
                                const formDataToSend = new FormData(formElement);

                                try {
                                    const response = await fetch('https://api.web3forms.com/submit', {
                                        method: 'POST',
                                        body: formDataToSend
                                    });

                                    if (response.ok) {
                                        setFormSubmitted(true);
                                        setFormData({ name: '', email: '', message: '' });
                                        setTimeout(() => setFormSubmitted(false), 5000);
                                    } else {
                                        alert('Failed to send message. Please try again or email us directly at laughingpawn@gmail.com');
                                    }
                                } catch (error) {
                                    console.error('Form submission error:', error);
                                    alert('Failed to send message. Please try again or email us directly at laughingpawn@gmail.com');
                                }
                            }}
                        >
                            {/* Hidden field for Web3Forms - Replace with your access key */}
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" value="New Contact Form Submission from Neural Architects" />
                            <input type="hidden" name="from_name" value="Neural Architects Website" />

                            {formSubmitted && (
                                <div className="form-success-message">
                                    ✅ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-large">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;