export class PolaroidItem {
  constructor(
    id = 0,
    title = "",
    year = 0,
    description = "",
    role = "",
    img = "",
    stack = [],
    techStacks = [],
    url = "",
    style = {},
    img1 = "",
    img2 = "",
    // zIndex = 1
    thumbnail = ""
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.description = description;
    this.role = role;
    this.img = img;
    this.stack = stack;
    this.techStacks = techStacks;
    this.url = url;
    this.style = style;
    this.img1 = img1;
    this.img2 = img2;
    this.thumbnail = thumbnail;
  }
}

export const POLAROID_ITEMS = [
  new PolaroidItem(
    1,
    "Wordle Clone",
    2022,
    "My Wordle clone created during my university days, using just vanilla JS.",
    "Developer",
    "static/assets/work_images/wordle.png",
    [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    ],
    ["Vanilla Javascript"],
    "https://wordle-clone-by-kevicebryan.vercel.app/",
    { bottom: "-8em", left: "32%", rotate: "-5" },
    "/static/assets/work_images/wordle.png",
    "/static/assets/work_images/wordle.png",
    "wordle.jpg"
  ),
  new PolaroidItem(
    2,
    "W3B Scholar",
    2022,
    "A web3 enthusiast's paradise where users can discover the latest trends in web3, blockchain, and the metaverse, and share their own experiences with others.",
    "Frontend Developer",
    "static/assets/work_images/w3b-scholar.png",
    [
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      "https://www.svgrepo.com/show/353735/firebase.svg",
    ],
    ["Next.js", "Firebase"],
    "https://w3b-scholar.vercel.app/",
    { top: "4em", left: "25%", rotate: "0" },
    "/static/assets/work_images/w3b-scholar.png",
    "/static/assets/work_images/w3b-scholar.png",
    "w3b-scholar.jpg"
  ),
  new PolaroidItem(
    3,
    "My Rail Travel",
    2023,
    "an AR-enabled landmark recommendation app born from the chaos of MRT Hackathon,\nwhere users can scan exit signs and discover what wonders lie ahead.",
    "Tech Lead",
    "/static/assets/work_images/my-rail-travel.gif",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://static.wikia.nocookie.net/ipod/images/4/44/Reality_Composer_macOS_icon.png",
      "https://i.pinimg.com/originals/d2/ae/e4/d2aee4bcb7a6f5ec4c1d288bc8c04951.png",
    ],
    ["Swift", "SwiftUI", "Reality Composer", "CoreData"],
    "#",
    { bottom: "-5em", right: "15%", rotate: "8" },
    "/static/assets/work_images/my-rail-travel.gif",
    "/static/assets/work_images/my-rail-travel.gif",
    "my-rail-travel.jpg"
  ),
  new PolaroidItem(
    5,
    "Lug N Loaded",
    2023,
    "A heart-pumping, adrenaline-fueled 2D puzzle multiplayer game where you and your friends take on the role of sneaky robbers, racing against time to cram all your stolen loot into a single, unsuspecting luggage.",
    "Tech Lead & PM",
    "/static/assets/work_images/lug-n-loaded.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://miro.medium.com/v2/resize:fit:572/1*-lPVtpH51_QwfwHJEPqLKw.png",
      "https://developer.apple.com/assets/elements/icons/game-center/game-center-128x128_2x.png",
    ],
    ["Swift", "SpriteKit", "GameKit"],
    "https://drive.google.com/file/d/1eSCJ6wbN6RkXBK3X1TjY1bfG3UpAhjTv/view?usp=sharing",
    { top: "1.5em", right: "22%", rotate: "-10" },
    "/static/assets/work_images/lug-n-loaded.png",
    "/static/assets/work_images/lug-n-loaded/lugNLoaded-2.png",
    "lug-n-loaded.jpg"
  ),
  new PolaroidItem(
    4,
    "Flanner",
    2023,
    "Family planner, born from the chaos of Apple Developer Academy, where my teammates & I were grouped because we all have our family as the closest people near us, and we'd like to spend more quality time with our loved ones.",
    "Tech Lead",
    "/static/assets/work_images/flanner.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://w7.pngwing.com/pngs/106/569/png-transparent-core-data-software-framework-database-apple-angle-fruit-nut-electric-blue.png",
    ],
    ["Swift", "SwiftUI", "CoreData"],
    "https://apps.apple.com/id/app/flanner/id6463742782",
    { bottom: "-1em", right: "-2em", rotate: "24" },
    "/static/assets/work_images/flanner.png",
    "/static/assets/work_images/flanner/flanner-2.png",
    "flanner.jpg"
  ),

  new PolaroidItem(
    6,
    "Pikolo",
    2023,
    "A cash flow manager, designed and created on my spare time in Apple Developer Academy, as my first app in the app store, born from my struggle of managing my own cash flow, so I decided to track my cash flow using this app, using emotional buffer (the daily and monthly budget) to budget myself not to overspend",
    "Creator & Solo Dev",
    "/static/assets/work_images/pikolo.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://w7.pngwing.com/pngs/106/569/png-transparent-core-data-software-framework-database-apple-angle-fruit-nut-electric-blue.png",
      "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
    ],
    ["Swift", "SwiftUI", "CoreData"],
    "https://apps.apple.com/id/app/pikolo-cash-flow-manager/id6463812788",
    { top: "50%", left: "10%", rotate: "12" },
    "/static/assets/work_images/pikolo.png",
    "/static/assets/work_images/pikolo/pikolo-2.png",
    "pikolo.jpg"
  ),
  new PolaroidItem(
    7,
    "Mission: A1",
    2023,
    "An immersive first person open world explorative game, that tells a story of an astronaut who got stuck in an unknown planet on his mission to find minerals to help save earth. he's desperate to go back home to his daughter, but will he make it? the game is full of surprises, and the fate of the astronaut is still unknown... even to me, the developer, as the game has not been published to the public yet, but a full run-through version is ready to play, if you want to play it, just let me know!",
    "Tech Lead",
    "/static/assets/work_images/missionA1.png",
    [
      "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
      "https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_1280.png",
    ],
    ["Unity", "SwiftUI", "C#"],
    "https://www.linkedin.com/posts/bryan-kevin_unity-unity3d-macos-activity-7135505729792196608-Lr6e?utm_source=share&utm_medium=member_desktop",
    { top: "20%", left: "-3em", rotate: "-20" },
    "/static/assets/work_images/missionA1/missionA1-1.png",
    "/static/assets/work_images/missionA1/missionA1-2.png",
    "mission-a1.jpg"
  ),
];
