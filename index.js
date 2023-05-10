const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [bessie, ,dolly, babe, little] = farmAnimals.split(' ')
const [blackAndWhite, , black, pink, ] = farmAnimals.split(' ')

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

const rainbowColorsInitial = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b, i, v] = rainbowColorsInitial;

const rainbowColors4 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [, , , , , indg, ] = rainbowColorsInitial;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const {muppetName, color, song, job, partner} = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {album: {theMuppetMovie: {song2, song4}}, nestedJob, nestedPartner} = nestedMuppet
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner