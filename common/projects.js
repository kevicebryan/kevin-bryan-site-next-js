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
    { top: "3em", left: "25%", rotate: "8" },
    "/static/assets/work_images/w3b-scholar.png",
    "/static/assets/work_images/w3b-scholar.png",
    "w3b-scholar.jpg"
  ),
  new PolaroidItem(
    3,
    "My Rail Travel",
    2023,
    "AR-enabled landmark recommendation app that emerged from the chaos of the MRT Hackathon. Users can scan exit signs to unveil the exciting wonders that await them. In addition, the app offers a curated list of nearby destinations at each station, aiming to boost local businesses and encourage greater use of public transport in Indonesia. With DiscoverAR, your journey becomes an adventure filled with new experiences just waiting to be explored!",
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
    "A heart-pumping, adrenaline-fueled 2D puzzle multiplayer game where you and your friend take on the role of sneaky robbers, racing against time to cram all your stolen loot into a single, unsuspecting luggage.",
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
    "Flanner (Family Planner) was born from the chaos of the Apple Developer Academy, where my teammates and I found common ground in our desire to prioritize quality time with our loved ones. This app helps you discover activities tailored to your family's mutual hobbies and interests, making it easier to decide what to do together based on your preferences and the current moment. Whether it’s planning a fun outing or a cozy evening at home, Family Planner ensures you make the most of your time with those who matter most.",
    "Tech Lead",
    "/static/assets/work_images/flanner.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://w7.pngwing.com/pngs/106/569/png-transparent-core-data-software-framework-database-apple-angle-fruit-nut-electric-blue.png",
    ],
    ["Swift", "SwiftUI", "CoreData"],
    "https://apps.apple.com/id/app/flanner/id6463742782",
    { top: "1em", right: "-1em", rotate: "18" },
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
    "Riverse: River Cleaning Platform",
    2023,
    "A Laravel-based platform that connects volunteers with river cleanup initiatives, enabling event organization, impact tracking, and community engagement to preserve natural water resources.",
    "Full Stack",
    "/static/assets/work_images/riverse.png",
    [
      "https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-512.png",
      "https://banner2.cleanpng.com/20180411/wre/avf0mauoj.webp",
    ],
    ["Laravel", "MySQL"],
    "",
    { top: "2%", left: "4em", rotate: "-4" },
    "/static/assets/work_images/riverse/1.png",
    "/static/assets/work_images/riverse/2.png",
    "riverse.jpg"
  ),
  new PolaroidItem(
    8,
    "Mission: A1",
    2023,
    "Immerse yourself in an exhilarating first-person open-world explorative game where you step into the shoes of a desperate astronaut stranded on an uncharted planet. On a mission to find vital minerals to save Earth, he faces unimaginable challenges and breathtaking discoveries in this mysterious world. With every passing moment, his thoughts drift to his daughter back home—will he make it back to her? Filled with unexpected twists and heart-pounding surprises, the fate of the astronaut hangs in the balance. As the developer, I know the outcome, but until the game is unveiled to the public, the journey remains shrouded in mystery. A full run-through version is ready for those eager to embark on this adventure—just let me know if you want to play!",
    "Tech Lead",
    "/static/assets/work_images/missionA1.png",
    [
      "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
      "https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_1280.png",
    ],
    ["Unity", "SwiftUI", "C#"],
    "https://www.linkedin.com/posts/bryan-kevin_unity-unity3d-macos-activity-7135505729792196608-Lr6e?utm_source=share&utm_medium=member_desktop",
    { top: "25%", left: "-3em", rotate: "-20" },
    "/static/assets/work_images/missionA1/missionA1-1.png",
    "/static/assets/work_images/missionA1/missionA1-2.png",
    "mission-a1.jpg"
  ),
  new PolaroidItem(
    9,
    "MMS' Multiple Orgs Cash Manager",
    2024,
    "MMS Cashflow is a web-based cash flow management system for PT Miryafan Mekaraya Sukses (MMS), a conglomerate with multiple subsidiaries. This centralized platform allows users to input and track income and expenses across all companies while providing real-time status records of debts for each subsidiary. Additionally, users can generate detailed reports and export them in CSV or PDF formats, streamlining financial operations and enhancing cash management insights.",
    "Full Stack",
    "/static/assets/work_images/mms-cashflow.png",
    [
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    ],
    ["Next.js", "Supabase"],
    "https://mms-ada-cashflow-app.vercel.app/dashboard",
    { top: "30%", right: "33%", rotate: "-12" },
    "/static/assets/work_images/mms-cashflow/1.png",
    "/static/assets/work_images/mms-cashflow/2.png",
    "mms-cashflow.jpg"
  ),
  new PolaroidItem(
    10,
    "Wedday: Wedding Invitation Generator",
    2024,
    "A SaaS web app that makes creating stunning wedding invitations effortless. Users can choose from a selection of professionally crafted designs, fill in their invitation details, and share them with ease. The app also offers options to save invitations as high-quality PDFs or images, making them perfect for both digital sharing and printing. It's the ultimate tool for creating personalized invitations quickly and beautifully!",
    "Creator & Solo Dev",
    "/static/assets/work_images/wedday.png",
    [
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    ],
    ["Next.js"],
    "https://wedday.vercel.app/",
    { bottom: "-10%", right: "-3em", rotate: "5" },
    "/static/assets/work_images/wedday/wedday-2.png",
    "/static/assets/work_images/wedday/wedday-1.png",
    "wedday.jpg"
  ),
];
