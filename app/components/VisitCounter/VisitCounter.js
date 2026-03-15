"use client";

import { useState, useEffect } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";
import styles from "./VisitCounter.module.css";

const VisitCounter = () => {
    const [displayCount, setDisplayCount] = useState("...");

    useEffect(() => {
        const handleVisits = async () => {
            try {
                const query = `*[_type == "blog" && title == "visits"][0]`;
                const data = await client.fetch(query);

                if (!data) return;

                const currentDbCount = Number(data.metadescription) || 0;
                setDisplayCount(currentDbCount);

                const alreadyCounted = localStorage.getItem("visitCounted");

                if (!alreadyCounted) {
                    setTimeout(async () => {
                        const newCount = currentDbCount + 1;

                        await client
                            .patch(data._id)
                            .set({ metadescription: String(newCount) })
                            .commit();

                        setDisplayCount(newCount);
                        localStorage.setItem("visitCounted", "true");
                        console.log("Visit documented successfully.");
                    }, 3000);
                }
            } catch (err) {
                console.error("Visit Counter Error:", err);
            }
        };

        handleVisits();
    }, []);

    return (
        <div className={styles.visitContainer}>
            <motion.div
                className={styles.visitCard}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <div className={styles.statusIndicator}>
                    <span className={styles.dot}></span>
                </div>

                <span className={styles.label}>Live Visits:</span>
                <span className={styles.count}>{displayCount}</span>
            </motion.div>
        </div>
    );
};

export default VisitCounter;