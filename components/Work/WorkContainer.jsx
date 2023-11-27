import Work from "./Work";
import classes from "./WorkContainer.module.css";

const WORK_LIST = [
  {
    title: "Mission: A1",
    year: "Sep - Nov 2023",
    image: "static/assets/work_images/missionA1.png",
    bodyTop:
      "An open world exploration game, where player not only explore the world, but also explore various mechanics, as the game contains 8 different mini games, each with its own different mechanic.",
    bodyBottom:
      "A 2.5 month project, where I workd as the tech lead working with 2 other engineers, 2 designers and a project manager. Responisble in making sure the code is clean and maintainable, mergable, and hands down worked on 4 of the 8 minigames avaialble in the game. Also worked on notable mechanics such as, NPC AI movement, First Person Player Movement, and more.",
    stack: ["Unity", "MacOS"],
    url: "#",
    id: 9,
  },
  {
    title: "Pikolo: Cash Flow Manager",
    year: "2023",
    image: "static/assets/work_images/pikolo.png",
    bodyTop:
      "Pikolo is dedicated for young adults who want to keep in track of their spending, especially to avoid overspending. Cash flow is divided into 4 flows in this app, Spending, Income, Lending, and Borrow.",
    bodyBottom:
      "A personally made native iOS application, designed and developed by me from the ground up. This app was created using my user's story, needs and demand for a cash flow manager app with good UI and features I need, especially as a student who gets allowance, to make sure my finance is tracked.",
    stack: ["SwiftUI", "CoreData", "Figma"],
    url: "https://apps.apple.com/id/app/pikolo-cash-flow-manager/id6463812788",
    id: 8,
  },
  {
    title: "My Rail Travel",
    year: "Aug 2023",
    image: "static/assets/work_images/my-rail-travel.gif",
    bodyTop:
      "A native iOS application designed for new MRT commuters or picnicers to explore destinations around MRT stations in Indonesia. The app also has an Augmented Reality (AR) feature, where user can scan Exit Boards, and destinations in front of those exit will be shown.",
    bodyBottom:
      "Worked on this project, as the Tech Lead, where I managed the workload of 2 other engineers, designed the model architecture, and implemented MVVM. Also worked hands down creating the AR feature.",
    stack: ["SwiftUI", "RealityKit", "CoreLocation"],
    url: "#",
    id: 7,
  },
  {
    title: "Lug N Loaded",
    year: "Jun - Jul 2023",
    image: "static/assets/work_images/lug-n-loaded.png",
    bodyTop:
      "A co-op challenge multiplayer game where players act as robbers who need to arrange and fit all their items in a luggage while getting distracted with various obstructions.",
    bodyBottom:
      "Worked on the main mechanic, the drag n dropping items, logic of items fitting in the luggage and its boundary logic, & also the game win condition. Also worked on the multithreaading, and implementation of GameKit for the quick match feature. Worked as a Tech Lead and Project Manager on this project using Jira and experience hands down experience on project management and SCRUM workflow.",
    stack: ["SpriteKit", "GameKit", "Jira"],
    url: "https://drive.google.com/file/d/1eSCJ6wbN6RkXBK3X1TjY1bfG3UpAhjTv/view?usp=drive_link",
    id: 6,
  },
  {
    title: "Flanner: Family Planner",
    year: "Apr - May 2023",
    image: "static/assets/work_images/flanner.png",
    bodyTop:
      "An app that offers families an opportunity to get recommendations on activity to spend their quality time based on their mutual interest. ",
    bodyBottom:
      "Worked as the Tech Lead, implementing clean code architecture for the team and also applying MVVM. Worked on Core Data for local storing of data, and also created the algorithm for the recommendation page, using weights system to show what best matches the user's interest.",
    stack: ["SwiftUI", "CoreData"],
    url: "https://apps.apple.com/id/app/flanner/id6463742782",
    id: 5,
  },
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
    id: 4,
  },
  {
    title: "WORDLE Clone",
    year: "2022",
    image: "static/assets/work_images/wordle.png",
    bodyTop:
      "A clone, unlimited version of wordle. made using only javascript.",
    bodyBottom: "",
    stack: ["JS"],
    url: "https://kevicebryan.github.io/src/WORDLE_clone/index.html",
    id: 3,
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
    id: 2,
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
    id: 1,
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
