export class Peripheral {
  constructor(
    id,
    name,
    description,
    link,
    infoPlacement = "bottom",
    icon = "default"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
    this.infoPlacement = infoPlacement || "bottom";
    this.icon = icon || "default";
  }
}

export const PERIPHERALS = [
  new Peripheral(
    "monitor",
    "Msi Pro Mp242c",
    `1920x1080 FHD, 23.6", 75hz monitor`,
    "https://tokopedia.link/7jzNMyP1uNb",
    "bottom",
    "monitor"
  ),
  new Peripheral(
    "mouse",
    "Pulsar Xlite V1",
    `100% guarantees no whiff`,
    "https://tokopedia.link/x1waB1i2uNb",
    "top",
    "mouse"
  ),
  new Peripheral(
    "keyboard",
    "Keychron K6",
    `with Akko clear keycaps and matcha switches`,
    "",
    "top",
    "keyboard"
  ),
  new Peripheral(
    "mic",
    "Razer Seiren Mini",
    `USB microphone, does the job`,
    "",
    "right",
    "mic"
  ),
  new Peripheral(
    "laptop",
    "Macbook Pro M2 2022",
    `freebie from Apple Developer Academy <3`,
    "",
    "top",
    "laptop"
  ),
  new Peripheral(
    "headphone",
    "Sony WH-1000XM4",
    `imo the best for its price`,
    "https://tokopedia.link/ryCKQJy2uNb",
    "right",
    "headphone"
  ),
  new Peripheral(
    "chair",
    "Oxihom FSM6",
    `great cheek and back support`,
    "https://tokopedia.link/pPDvmjJ2uNb",
    "right",
    "chair"
  ),
  new Peripheral(
    "desk",
    "Grandma's Dining Table",
    `she got a new dining table, so I claim this one for work`,
    "",
    "top",
    "desk"
  ),

  // new Peripheral("keyboard", "KEYBOARD_TBA", ``, ""),
];
