import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

/**
 * Projects Component
 * Displays featured projects with detailed breakdowns and architecture decisions,
 * followed by additional projects in a grid layout.
 */
const ProjectsPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [count, setCount] = useState(3); // Start with 3 projects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  // Featured projects with detailed breakdowns
  // In production, this could come from CMS with a "featured" flag
  const featuredProjects = [
    {
      id: "featured-1",
      title: "Full-Stack Blogging Platform",
      description:
        "A complete blogging system with authentication, rich text editing, and real-time updates.",
      architecture:
        "Monolithic architecture with React frontend and Node.js/Express backend. MongoDB for data persistence with Mongoose ODM. JWT-based authentication with refresh token rotation.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      tradeoffs: [
        "Chose MongoDB over PostgreSQL for flexible schema as content structure evolved frequently",
        "Implemented JWT instead of sessions for stateless API, trading some security for scalability",
        "Used Socket.io for real-time features despite higher complexity, prioritizing user experience",
      ],
      challenges: [
        "Handling concurrent edits with optimistic locking",
        "Implementing secure file uploads with size/type validation",
        "Optimizing database queries for nested comment threads",
      ],
      url: "#",
      githubUrl: "https://github.com/juneid18",
    },
    {
      id: "featured-2",
      title: "Real-Time Chat Platform",
      description:
        "WebSocket-based messaging application with rooms, file sharing, and presence indicators.",
      architecture:
        "Client-server architecture with WebSocket connections. Redis for session management and pub/sub. PostgreSQL for message persistence with read replicas for scaling.",
      techStack: [
        "React",
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "Redis",
        "AWS S3",
      ],
      tradeoffs: [
        "PostgreSQL chosen for ACID compliance in message delivery, accepting higher write latency",
        "Redis pub/sub for real-time features, adding infrastructure complexity for better performance",
        "S3 for file storage instead of local storage, increasing costs but improving reliability",
      ],
      challenges: [
        "Managing WebSocket connection lifecycle and reconnection logic",
        "Implementing message ordering guarantees across distributed servers",
        "Handling large file uploads without blocking the event loop",
      ],
      url: "#",
      githubUrl: "https://github.com/juneid18",
    },
  ];

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `*[_type == 'project'][0...${count}]`;
        const data = await client.fetch(query);

        if (!data?.length) {
          throw new Error("No projects found");
        }

        setProjectData(data);
      } catch (err) {
        console.error("Project fetch error:", err);
        setError("Failed to load projects. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, [count]);

  const handleLoadMore = () => setCount((prev) => prev + 3);

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source);

  return (
    <section className={styles.container} aria-labelledby="projects-heading">
      <header className={styles.header}>
        <h2 id="projects-heading">Featured Projects</h2>
        <p>
          Deep dives into projects that demonstrate system design, technical
          decision-making, and real-world problem solving.
        </p>
      </header>

      {/* Featured Projects Section */}
      <div className={styles.featuredSection}>
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className={styles.featuredCard}
            aria-labelledby={`project-${project.id}-title`}
          >
            <div className={styles.featuredHeader}>
              <h3 id={`project-${project.id}-title`}>{project.title}</h3>
              <div className={styles.projectLinks}>
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`View ${project.title} live site`}
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </div>

            <p className={styles.featuredDescription}>{project.description}</p>

            <button
              className={styles.expandButton}
              onClick={() =>
                setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )
              }
              aria-expanded={expandedProject === project.id}
              aria-controls={`project-${project.id}-details`}
            >
              {expandedProject === project.id
                ? "Hide Details"
                : "Show Technical Details"}
            </button>

            {expandedProject === project.id && (
              <div
                id={`project-${project.id}-details`}
                className={styles.projectDetails}
                role="region"
                aria-labelledby={`project-${project.id}-title`}
              >
                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>Architecture</h4>
                  <p className={styles.detailText}>{project.architecture}</p>
                </div>

                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>Tech Stack</h4>
                  <ul className={styles.techStackList} role="list">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx} className={styles.techStackItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>Trade-offs & Decisions</h4>
                  <ul className={styles.tradeoffList} role="list">
                    {project.tradeoffs.map((tradeoff, idx) => (
                      <li key={idx} className={styles.tradeoffItem}>
                        <span className={styles.bullet}>→</span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>Key Challenges</h4>
                  <ul className={styles.challengeList} role="list">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className={styles.challengeItem}>
                        <span className={styles.bullet}>•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Additional Projects Section */}
      <header className={styles.header} style={{ marginTop: "4rem" }}>
        <h2>Additional Projects</h2>
        <p>
          More projects showcasing diverse technical skills and problem-solving
          approaches.
        </p>
      </header>

      {loading ? (
        <div className={styles.loader}>
          {/* <Loader /> */}
          <span>Loading Projects...</span>
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <>
          <div className={styles.grid}>
            {projectData.map((project, index) => (
              <article
                className={`${styles.card} ${
                  hoveredIndex === index ? styles.hovered : ""
                }`}
                key={project._id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={urlFor(project.poster).url()}
                    alt={`${project.title} screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.detail}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Project
                    <FiExternalLink />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {projectData.length >= count && (
            <button
              className={styles.loadMore}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Show More"}
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default ProjectsPage;
