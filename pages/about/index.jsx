import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./about.module.css";

const About = () => {
  const [img, setImg] = useState(`url(${"static/assets/about/me_2.jpg"})`);

  const handleMouseEnter = () => {
    setImg(`url(${"static/assets/about/me_1.jpeg"})`);
  };
  const handleMouseLeave = () => {
    setImg(`url(${"static/assets/about/me_2.jpeg"})`);
  };

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.left}>
          <p>Hi!</p>
          <p>
            I&#39;m Kevin, a tech enthusiast with high aspiration to keep on
            growing and learn new stuff. 🌸🍃
          </p>

          <div
            className={classes.image}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: img,
            }}
          ></div>
          <a href="https://drive.google.com/file/d/1Jmf4ZpKtk9Em2xy48muTjSHq4NQifWm_/view">
            Download my curriculum vitae here 👈
          </a>
        </div>
        <div className={classes.right}>
          <div className={classes.group}>
            <p className={classes.grouptitle}>Skills</p>
            <div className={classes.groupitems}>
              <p>~ iOS Mobile Development</p>
              <p>~ Web Development (React, Next, Express, Laravel, etc.)</p>
              <p>~ Database (SQL, MongoDB)</p>
              <p>~ UI Design (Figma)</p>
              <p>~ Video Editing (Premiere Pro)</p>
            </div>
          </div>
          <div className={classes.group}>
            <p className={classes.grouptitle}>Experience</p>
            <div className={classes.groupitems}>
              <p>
                Junior Developer @{" "}
                <a href="https://developeracademy.apps.binus.ac.id/">
                  Apple Developer Academy
                </a>
              </p>
              <br />
              <small>Mar 2022 - Current</small>
              <p>
                Staff & Content Creator @{" "}
                <a href="https://bncc.net/">Bina Nusantara Computer Club</a>
              </p>
              <br />
              <small>Sep 2021 - Sep 2022</small>
            </div>
            <div className={classes.groupitems}>
              <p>
                Director of Photography @{" "}
                <a href="https://www.filemagz.com/author/kevin-bryan/">
                  Filemagz
                </a>
              </p>
              <br />
              <small>Sep 2021 - Sep 2022</small>
              <p>
                Staff & Content Creator @{" "}
                <a href="https://bncc.net/">Bina Nusantara Computer Club</a>
              </p>
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
            <p className={classes.grouptitle}>Who am I?</p>
            <div className={classes.groupitems}>
              <p>an observer.</p>
              <p>a thinker.</p>
              <p>a developer.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
