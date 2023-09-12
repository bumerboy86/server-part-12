import styles from "./Home.module.css";
import { useRef } from "react";
import defaultImage from "../../../src/assets/lessonBg.jpeg";

export const Home = () => {
  const mainLessonsRef = useRef<HTMLDivElement>(null);

  const scrollToMainLessons = () => {
    if (mainLessonsRef.current) {
      mainLessonsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.mainHome}>
      <article className={styles.imageBlock}>
        <div className={styles.mainHomeFunknBlock}>
          <h1 className={styles.mainHomeTitle}>
            ешь<span>()</span>; спи<span>()</span>; пишиКод<span>()</span>;
            повтори<span>()</span>;
          </h1>
          <button onClick={scrollToMainLessons}>К урокам</button>
        </div>
      </article>
      <article className={styles.mainLessons} ref={mainLessonsRef}>
        <p>Уроки</p>
        <p>Начни учиться сейчас!!!</p>
        <ul className={styles.lessonsList}>
          <li>
            <a
              href='https://www.youtube.com/watch?v=QlkO662f72U&list=PLVavKpmBjEjXpCgp3h9iGmpHzDerhEDIx&index=8'
              target='_blank'
              rel='noopener'
            >
              <img
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                }}
                className={styles.lessonsListImages}
                src=''
                alt='lessons'
              />
              <p>урок №8</p>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=fZjzF-gwBH4&list=PLVavKpmBjEjXpCgp3h9iGmpHzDerhEDIx&index=9'
              target='_blank'
              rel='noopener'
            >
              <img
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                }}
                className={styles.lessonsListImages}
                src=''
                alt='lessons'
              />
              <p>урок №9</p>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=9o4S3ae1SG0&list=PLVavKpmBjEjXpCgp3h9iGmpHzDerhEDIx&index=10'
              target='_blank'
              rel='noopener'
            >
              <img
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                }}
                className={styles.lessonsListImages}
                src=''
                alt='lessons'
              />
              <p>урок №10</p>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=rTZEmQgkYuI&list=PLVavKpmBjEjXpCgp3h9iGmpHzDerhEDIx&index=12'
              target='_blank'
              rel='noopener'
            >
              <img
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                }}
                className={styles.lessonsListImages}
                src=''
                alt='lessons'
              />
              <p>урок №11</p>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
