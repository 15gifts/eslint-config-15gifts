const getPerson = (name, defaults) => {
  const {
    age,
    hair: { color: hairColor, length: hairLength },
  } = defaults
  const favouriteSports = ['golf', 'tennis']
  const favouriteMusic = ['reggae', 'blues', 'death metal']

  return {
    age: parseInt(age, 10),
    hair: `${hairLength} and ${hairColor}`,
    hobbies: [...favouriteSports, ...favouriteMusic],
    name,
  }
}

const barry = getPerson('barry', {
  age: 4,
  hair: { color: 'blonde', length: 'long' },
})

export default [barry]
