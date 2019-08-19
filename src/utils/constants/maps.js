export const courseStyleMap = {
  smb: "Super Mario Bros.",
  smb3: "Super Mario Bros. 3",
  smw: "Super Mario World",
  nsmb: "New Super Mario Bros. U",
  sm3w: "Super Mario 3D World",
};

export const courseStyleOptionsArray = Object.keys(courseStyleMap).map(key => ({
  label: courseStyleMap[key],
  value: key,
}));

export const courseThemes = {
  ground: "Ground",
  sky: "Sky",
  underground: "Underground",
  forest: "Forest",
  underwater: "Underwater",
  ghostHouse: "Ghost house",
  desert: "Desert",
  airship: "Airship",
  snow: "Snow",
  castle: "Castle",
};

export const courseThemesOptionsArray = Object.keys(courseThemes).map(key => ({
  label: courseThemes[key],
  value: key,
}));

export const courseTags = {
  standard: "Standard",
  puzzleSolving: "Puzzle-solving",
  speedrun: "Speedrun",
  autoscroll: "Autoscroll",
  autoMario: "Auto-Mario",
  shortAndSweet: "Short and sweet",
  multiplayerVersus: "Multiplayer Versus",
  themed: "Themed",
  music: "Music",
};

export const courseTagsOptionsArray = Object.keys(courseTags).map(key => ({
  label: courseTags[key],
  value: key,
}));
