import Layout from "../../components/Layout/Layout";
import classes from "./about.module.css";
const About = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.left}>
          <p>
            I’m Kevin Bryan, a Computer Science Student at BINUS University, and
            I love building websites! <br /> Currently, I’m trying to learn new
            tech and expand my creativities in building a unique website with
            its own stories and user interaction.
          </p>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${"static/assets/about/me_2.jpg"})`,
            }}
          ></div>
          <a
            href="https://drive.google.com/file/d/1Jmf4ZpKtk9Em2xy48muTjSHq4NQifWm_/view"
            target="_blank"
          >
            Download my curriculum vitae here 👈
          </a>
        </div>
        <div className={classes.right}>
          <div className={classes.group}>
            <p className={classes.grouptitle}>Skills</p>
            <div className={classes.groupitems}>
              <p>Web Development (React, Next, Express, Laravel, etc.)</p>
              <p>Database (SQL, MongoDB)</p>
              <p>UI Design (Figma)</p>
              <p>Video Editing (Premiere Pro)</p>
            </div>
          </div>
          <div className={classes.group}>
            <p className={classes.grouptitle}>Experience</p>
            <div className={classes.groupitems}>
              <p>Content Creator @ Bina Nusantara Computer Club</p>
              <br />
              <small>Sep 2021 - Sep 2022</small>
              <p>Content Creator @ Bina Nusantara Computer Club</p>
              <br />
              <small>Sep 2021 - Sep 2022</small>
            </div>
          </div>
          <div className={classes.group}>
            <p className={classes.grouptitle}>Education</p>
            <div className={classes.groupitems}>
              <p>School of Computer Science</p>
              <p>Bina Nusantara University</p>
              <br />
              <small>2020-2024</small>
            </div>
          </div>
          <div className={classes.group}>
            <p className={classes.grouptitle}>My Values</p>
            <div className={classes.groupitems}>
              <p>Passion is everything.</p>
              <p>Never stop learning.</p>
              <p>Nobody's perfect.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
