import Work from "./Work";
import classes from "./WorkContainer.module.css";

const WORK_LIST = [
  {
    title: "Mission: A1",
    year: "Sep - Nov 2023",
    image: "static/assets/work_images/missionA1.png",
    bodyTop:
      "An open world exploration game, where player not only explore the world, but also explore various mechanics.\nThe game contains 8 different mini games, each with its own set of rules.",
    bodyBottom:
      "A 2.5 month project, where I worked as the Tech Lead working with 2 other engineers, 2 designers & a project manager.\nResponisble in making sure the code is clean & maintainable, fix conflicts, & h&s down worked on 4 of the 8 minigames avaialble in the game.\nAlso worked on notable mechanics such as, NPC AI movement, First Person Player Movement, & more.",
    stack: ["Unity", "MacOS", "C#"],
    url: "https://www.linkedin.com/posts/bryan-kevin_unity-unity3d-macos-activity-7135505729792196608-Lr6e?utm_source=share&utm_medium=member_desktop",
    id: 9,
  },
  {
    title: "Pikolo: Cash Flow Manager",
    year: "2023",
    image: "static/assets/work_images/pikolo.png",
    bodyTop:
      "Pikolo is dedicated for young adults who want to keep in track of their spending, especially to avoid overspending.\nCash flow is divided into 4 flows in this app, Spending, Income, Lending, & Borrow.",
    bodyBottom:
      "Designed & developed by me from the ground up.\nThis app was created using my user's story, needs & dem& for a cash flow manager app with good UI & features I need,\nespecially as a student who gets allowance, to make sure my finance is tracked.",
    stack: ["SwiftUI", "CoreData", "Figma"],
    url: "https://apps.apple.com/id/app/pikolo-cash-flow-manager/id6463812788",
    id: 8,
  },
  {
    title: "My Rail Travel",
    year: "Aug 2023",
    image: "static/assets/work_images/my-rail-travel.gif",
    bodyTop:
      "A native iOS application designed for new MRT commuters or picnicers to explore destinations around MRT stations in Indonesia. The app also has an Augmented Reality (AR) feature, where user can scan Exit Boards, & destinations in front of those exit will be shown.",
    bodyBottom:
      "Worked as the Tech Lead, managing the my personal workload & 2 other engineers,\ndesigned the model architecture, & implemented MVVM.\nResponsible in developing the AR feature.",
    stack: ["SwiftUI", "RealityKit", "CoreLocation"],
    url: "#",
    id: 7,
  },
  {
    title: "Lug N Loaded",
    year: "Jun - Jul 2023",
    image: "static/assets/work_images/lug-n-loaded.png",
    bodyTop:
      "A co-op challenge multiplayer game where players act as robbers who need to arrange & fit all their items in a luggage while getting distracted with various obstructions.",
    bodyBottom:
      "Worked on the main mechanic, the drag n dropping items, logic of items fitting in the luggage & its boundary logic, & the game win condition. \nAlso worked on  multithreaading, & implementation of GameKit for the quick match feature. \nWorked as a Tech Lead & Project Manager on this project using Jira implementing SCRUM workflow.",
    stack: ["SpriteKit", "GameKit", "SwiftUI"],
    url: "https://drive.google.com/file/d/1eSCJ6wbN6RkXBK3X1TjY1bfG3UpAhjTv/view?usp=sharing",
    id: 6,
  },
  {
    title: "Flanner: Family Planner",
    year: "Apr - May 2023",
    image: "static/assets/work_images/flanner.png",
    bodyTop:
      "An app that offers families an opportunity to get recommendations on activity to spend their quality time based on their mutual interest. ",
    bodyBottom:
      "Worked as the Tech Lead, implementing clean code architecture for the team & also applying MVVM.\nWorked on Core Data for local storage, & also created the algorithm for the recommendation page.",
    stack: ["SwiftUI", "CoreData"],
    url: "https://apps.apple.com/id/app/flanner/id6463742782",
    id: 5,
  },
  {
    title: "W3B Scholar",
    year: "2022",
    image: "static/assets/work_images/w3b-scholar.png",
    bodyTop:
      "A blog website, where users can share articles to help educate Indonesian about Web3, NFT, & the Metaverse in hope to build & develop more Web3 Developers in Indonesia.",
    bodyBottom:
      "I build this site together with my team during Informatics Festival 2022, an annual web building competition. My role on this project was mostly on the front end, building the article page, & its functionality such as pagination & searching.",
    stack: ["NextJS", "Vanilla CSS", "Firebase"],
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
      "A recipe app where you can browse over 1000 recipes. You can view & search through existing recipe or choose to upload your own recipe! It also has a bookmarking feature, to keep track of your favorite recipe.",
    bodyBottom:
      "This project was the first project where I dealt with pagination, search queries, & actually fetching & manipulating data from an API.",
    stack: ["AJAX Javascript"],
    url: "https://kevinbryan-forkify.netlify.app/",
    id: 2,
  },
  {
    title: "Filetechno",
    year: "2021 - 22",
    image: "static/assets/work_images/filetechno.png",
    bodyTop:
      "A social media project, currently educating over 4000+ followers on programming & UI/UX design information.",
    bodyBottom:
      "Filetechno is created to help educate & share tech-design related information, in a simpler, fun & easier way to underst&.",
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
