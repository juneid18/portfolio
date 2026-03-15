import { useEffect, useState } from "react";
import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import styles from "./blog.module.css"; // Use CSS modules instead of styled-jsx

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const builder = imageUrlBuilder(client);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const query = `*[_type == "blog" && title != "visits"]`;
        const data = await client.fetch(query);

        if (!data?.length) {
          throw new Error("No achievements found");
        }

        setAchievements(data);
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError("Failed to load achievements. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) return <div className={styles.loading}>Loading achievements...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="blog-heading">Professional Achievements</h2>
          <p>
            Key milestones and accomplishments demonstrating my technical expertise
            and professional growth.
          </p>
        </header>

        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <article
              key={achievement._id}
              className={styles.card}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="button"
              tabIndex={0}
            >
              <div className={styles.number}>{index + 1}</div>
              <p className={styles.title}>{achievement.title}</p>

              {hoveredIndex === index && achievement.poster && (
                <div className={styles.preview}>
                  <Image
                    src={builder.image(achievement.poster).url()}
                    alt={`Visual representation of ${achievement.title}`}
                    width={200}
                    height={150}
                    className={styles.previewImage}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;