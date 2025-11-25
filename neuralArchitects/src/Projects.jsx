import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Immersive 3D RPG Game",
            description: "Open-world role-playing game with advanced AI NPCs and real-time combat systems. Features dynamic weather, day-night cycles, and complex quest systems.",
            fullDescription: "This ambitious project showcases our expertise in game development, featuring a vast open world with stunning graphics, intelligent NPC behaviors, and a combat system that rewards skill and strategy. The game includes over 100 hours of gameplay, custom soundtrack, and cutting-edge graphics technology.",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop",
            category: "Game Dev",
            technologies: ["Unity", "C#", "AI/ML", "Photon"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Real-Time Object Detection",
            description: "Computer vision system for autonomous navigation and object tracking with 98% accuracy",
            fullDescription: "Advanced computer vision solution utilizing deep learning for real-time object detection and tracking. Optimized for edge devices and capable of processing 60+ FPS on standard hardware.",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
            category: "Computer Vision",
            technologies: ["Python", "TensorFlow", "OpenCV", "YOLO"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Multiplayer Battle Arena",
            description: "Competitive online multiplayer game with custom networking and matchmaking systems",
            fullDescription: "Fast-paced multiplayer battle arena supporting 100+ concurrent players with minimal latency. Features custom matchmaking algorithm, anti-cheat systems, and progression mechanics.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            category: "Game Dev",
            technologies: ["Unreal Engine", "C++", "AWS", "Redis"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Facial Recognition AI",
            description: "Advanced facial recognition system with emotion detection and real-time analysis capabilities",
            fullDescription: "State-of-the-art facial recognition system capable of identifying individuals and detecting emotions in real-time. Privacy-focused design with on-device processing option.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
            category: "Computer Vision",
            technologies: ["Python", "PyTorch", "OpenCV", "Face Recognition"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "IoT Smart Home System",
            description: "Embedded systems integration for automated home control, monitoring, and energy management",
            fullDescription: "Comprehensive IoT solution for smart home automation with custom PCB design, mobile app control, and cloud integration. Features voice control, predictive automation, and energy optimization.",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
            category: "Embedded Systems",
            technologies: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
            github: "#",
            demo: "#"
        },
        {
            id: 6,
            title: "VR Gaming Experience",
            description: "Immersive virtual reality game with haptic feedback, motion tracking, and social features",
            fullDescription: "Cutting-edge VR experience pushing the boundaries of immersion with custom haptic feedback systems, precise motion tracking, and multiplayer social features.",
            image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=500&fit=crop",
            category: "Game Dev",
            technologies: ["Unity", "SteamVR", "C#", "Blender"],
            github: "#",
            demo: "#"
        }
    ];

    const categories = ['All', 'Game Dev', 'Computer Vision', 'Embedded Systems'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="projects-page">
            <section className="projects-hero">
                <h1 className="page-title">Our Projects</h1>
                <p className="page-subtitle">
                    Explore our portfolio of innovative solutions in game development, computer vision, and embedded systems
                </p>
            </section>

            <section className="projects-content">
                <div className="filter-container">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid-full">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card-full" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-category-badge">{project.category}</div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.fullDescription}</p>
                                <div className="project-technologies">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} className="project-link-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Code
                                    </a>
                                    <a href={project.demo} className="project-link-btn primary">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polygon points="10 8 16 12 10 16 10 8" />
                                        </svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
