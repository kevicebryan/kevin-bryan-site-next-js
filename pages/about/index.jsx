import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import classes from "./about.module.css";
import { Tooltip } from "react-tooltip";

const About = () => {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.aboutBox}>
          <Tooltip
            id="ada-tooltip"
            style={{
              backgroundColor: " #007aff",
              color: "white",
              borderRadius: "8px",
              opacity: "1",
              zIndex: "10",
            }}
          />
          <div className={classes.pokemonCardWrapper}>
            <PokemonCard></PokemonCard>
          </div>

          <div className={classes.logo}>
            <svg
              className={classes.circle}
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
            >
              <circle cx="38.4301" cy="37.9457" r="37.5699" fill="#0029FF" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="269"
              height="377"
              viewBox="0 0 269 377"
              fill="none"
            >
              <path
                d="M0 339.82V36.255C0 16.2319 16.2319 0 36.255 0C56.278 0 72.5099 16.2319 72.5099 36.255V339.82C72.5099 359.843 56.278 376.075 36.255 376.075C16.2319 376.075 0 359.843 0 339.82Z"
                fill="#0029FF"
              />
              <path
                d="M213.917 113.837H231.055C251.804 113.837 268.625 130.657 268.625 151.407C268.625 172.156 251.804 188.977 231.055 188.977H208.999C199.543 188.977 190.16 191.258 181.745 195.57C161.836 205.771 149.152 226.342 149.152 248.713C149.152 270.451 165.212 288.846 186.751 291.78L227.882 297.382C247.564 300.063 262.238 316.872 262.238 336.735C262.238 358.669 244.457 376.45 222.522 376.45H207.107C194.868 376.45 182.977 372.378 173.308 364.875L94.1201 291.726C90.7388 288.603 87.0939 285.767 83.3146 283.139C70.6314 274.319 70.6314 272.052 70.6314 253.597V244.58C70.6314 224.125 70.4861 224.356 86.4108 211.519L179.582 125.953C189.308 118.112 201.425 113.837 213.917 113.837Z"
                fill="#0029FF"
              />
            </svg>
          </div>

          <div className={`${classes.aboutNote} ${classes.exp} `}>
            <h3>Experience</h3>

            <h4
              data-tooltip-id="ada-tooltip"
              data-tooltip-content="Developed & maintained a learning platform used by over 100.000 members."
              data-tooltip-place="left"
            >
              Software Engineer (FE)
            </h4>
            <h5>@Coding Studio</h5>
            <div className={classes.caption}>Feb 2024 - Present</div>

            <h4
              data-tooltip-id="ada-tooltip"
              data-tooltip-content="Developed various iOS/macOS apps and games."
              data-tooltip-place="left"
            >
              Junior iOS Developer
            </h4>
            <h5>@Apple Developer Academy</h5>
            <div className={classes.caption}>Mar 2023 - Dec 2023</div>

            <h4>Director of Photography</h4>
            <h5>@Filemagz</h5>
            <div className={classes.caption}>Sep 2021 - Sep 2022</div>

            <h4>Staff & Content Creator</h4>
            <h5>@BNCC</h5>
            <div className={classes.caption}>Sep 2021 - Sep 2022</div>
          </div>
          <div className={`${classes.aboutNote} ${classes.edu} `}>
            <h3>Education</h3>
            <h4>Bina Nusantara University</h4>

            <div className={classes.row}>
              <h5>School of Computer Science</h5>
              <p>2020-2024</p>
            </div>
          </div>
          <div className={`${classes.aboutNote} ${classes.skill} `}>
            <h3>Skills</h3>

            <h4>iOS Development</h4>
            <h5>SwiftUI, UIKit, Apple Frameworks</h5>

            <h4>Web Development</h4>
            <h5>React, NextJS, Express, Laravel, etc.</h5>

            <h4>Database</h4>
            <h5>MySQL, MongoDB</h5>
          </div>
        </div>
        <a
          href="https://docs.google.com/document/d/1l4DKu1EOlHGFQoaU25ws9S0j_XEfiAcDxHDxkqu9plo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my curriculum vitae here 👈
        </a>
      </div>
    </Layout>
  );
};

export default About;
