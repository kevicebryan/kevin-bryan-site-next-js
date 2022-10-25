import Work from "./Work";
import classes from "./WorkContainer.module.css";

const WORK_LIST = [
  {
    title: "W3B Scholar",
    year: "2022",
    image: "static/assets/work_images/w3b-scholar.png",
    bodyTop:
      "A blog website, where users can share articles to help educate Indonesian about Web3, NFT, and the Metaverse in hope to build and develop more Web3 Developers in Indonesia.",
    bodyBottom:
      "I build this site together with my team during Informatics Festival 2022, an annual web building competition. My role on this project was mostly on the front end, building the article page, and its functionality such as pagination and searching.",
    stack: ["NextJS", "CSS Style Component", "Firebase"],
    url: "https://w3b-scholar.vercel.app/",
    id: 1,
  },
  {
    title: "WORDLE Clone",
    year: "2022",
    image: "static/assets/work_images/wordle.png",
    bodyTop:
      "A clone, unlimited version of wordle. made using only javascript.",
    bodyBottom: "",
    stack: ["JS"],
    url: "",
    id: 2,
  },
  {
    title: "Forkify",
    year: "2022",
    image: "static/assets/work_images/forkify.png",
    bodyTop:
      "A recipe app where you can browse over 1000 recipes. You can view and search through existing recipe or choose to upload your own recipe! It also has a bookmarking feature, to keep track of your favorite recipe.",
    bodyBottom:
      "This project was the first project where I dealt with pagination, search queries, and actually fetching and manipulating data from an API.",
    stack: ["AJAX Javascript"],
    url: "https://kevinbryan-forkify.netlify.app/",
    id: 3,
  },
  {
    title: "Filetechno",
    year: "2021 - 22",
    image: "static/assets/work_images/filetechno.png",
    bodyTop:
      "A social media project, currently educating over 4000+ followers on programming and UI/UX design information.",
    bodyBottom:
      "Filetechno is created to help educate and share tech-design related information, in a simpler, fun and easier way to understand.",
    stack: ["Figma", "Instagram"],
    url: "https://www.instagram.com/filetechno/",
    id: 4,
  },
];

const WorkContainer = () => {
  return (
    <div className={classes.wrapper}>
      {WORK_LIST.map((work) => (
        <Work
          title={work.title}
          key={work.id}
          year={work.year}
          image={work.image}
          bodyTop={work.bodyTop}
          bodyBottom={work.bodyBottom}
          stack={work.stack}
          url={work.url}
        />
      ))}
    </div>
  );
};

export default WorkContainer;
