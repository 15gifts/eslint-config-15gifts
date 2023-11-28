const getPerson = (name, defaults) => {
  const {
    age,
    hair: { color: hairColor, length: hairLength },
  } = defaults;
  const favouriteSports = ["golf", "tennis"];
  const favouriteMusic = ["reggae", "blues", "death metal"];

  return {
    hobbies: [...favouriteSports, ...favouriteMusic],
    hair: `${hairLength} and ${hairColor}`,
    age: parseInt(age),
    name,
  };
};

const sport = "tennis";
if (sport === sport) {
  console.log("tennis");
}

const barry = getPerson("barry", {
  hair: { length: "long",
    color: "blonde", }, // prettier-ignore
  age: 4,
});

export default [barry];
