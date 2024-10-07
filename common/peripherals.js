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
    "top",
    "monitor"
  ),
  new Peripheral(
    "mouse",
    "Pulsar Xlite Wireless V1",
    ``,
    "https://tokopedia.link/x1waB1i2uNb",
    "right",
    "mouse"
  ),
  new Peripheral(
    "keyboard",
    "Keychron K6",
    `with Akko clear keycaps and matcha switches`,
    "",
    "bottom",
    "keyboard"
  ),
  new Peripheral(
    "mic",
    "Razer Seiren Mini",
    `USB microphone, does the job`,
    "left",
    "mic"
  ),
  new Peripheral(
    "laptop",
    "Macbook Pro M2 2022",
    `Thank you Apple Developer Academy`,
    "",
    "bottom",
    "laptop"
  ),
  new Peripheral(
    "headphone",
    "Sony WH-1000XM4",
    `Imo the best headphone for its price`,
    "https://tokopedia.link/ryCKQJy2uNb",
    "bottom",
    "headphone"
  ),
  new Peripheral(
    "chair",
    "Oxihom FSM6",
    `Ergonomic with mesh seating and a great lumbar support (top build quaity)`,
    "https://tokopedia.link/pPDvmjJ2uNb",
    "left",
    "chair"
  ),
  new Peripheral(
    "desk",
    "Grandma's Dining Table",
    `She got a new dining table, so I claim this one for work`,
    "",
    "bottom",
    "desk"
  ),

  // new Peripheral("keyboard", "KEYBOARD_TBA", ``, ""),
];
