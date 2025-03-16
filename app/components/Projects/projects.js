import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
// import Loader from "../Loader"; // Create a simple spinner component

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [count, setCount] = useState(3); // Start with 3 projects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const handleLoadMore = () => setCount(prev => prev + 3);

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>My Projects</h2>
        <p>
          A collection of innovative projects I've developed, showcasing technical 
          expertise and creative problem-solving.
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
                className={`${styles.card} ${hoveredIndex === index ? styles.hovered : ""}`}
                key={project._id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={urlFor(project.poster).url()}
                    alt={`${project.title} screenshot`}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>
                    {project.detail}
                  </p>
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
              {loading ? 'Loading...' : 'Show More'}
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default ProjectsPage;