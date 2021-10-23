const getRandomNumber = (min: number, max: number):number =>
  Math.floor(Math.random() * (max - min + 1) + min);

function getRandomElement<T>(array: T[]): T {
  return array[getRandomNumber(0, array.length - 1)];
}

export {getRandomElement};
