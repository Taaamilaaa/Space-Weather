import styles from "./aboutPage.module.css";

export function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Space Weather </h1>

      <section>
        <h2>🛰️ What is this?</h2>
        <p>
          <strong>Space Weather Alert</strong> — This is a web application for
          tracking solar activity: flares, coronal mass ejections, geomagnetic
          storms, and other events affecting Earth. All data is retrieved in
          real time via the
          <a
            href="https://kauai.ccmc.gsfc.nasa.gov/DONKI/"
            target="_blank"
            rel="noreferrer"
          >
            NASA DONKI API
          </a>
          .
        </p>
      </section>

      <section>
        <h2>⚙️ Technologies</h2>
        <ul>
          <li>React + Vite</li>
          <li>React Router</li>
          <li>NASA DONKI API</li>
          <li>CSS Modules / variables</li>
        </ul>
      </section>

      <section>
        <h2>👩‍💻 About the author</h2>
        <p>
          Hi! I'm Tamila — a frontend developer on a journey to turn curiosity
          into code. Originally from elsewhere and currently living in Poland
          with my husband, three wonderful kids, and a French bulldog, I’m
          navigating life, migration, and tech — all at once. Though I’m not an
          astrophysicist, I built this project because I love learning new
          things and challenging myself with real data and APIs. For me,
          development is not just about writing code, but about creating
          something useful, beautiful, and a little bit inspiring. My goal is to
          grow as a frontend developer, join a supportive team, and build
          products that make life easier (or at least more interesting!).
        </p>
      </section>
    </div>
  );
}
