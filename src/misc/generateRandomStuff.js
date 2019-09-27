const languages = ['ru', 'as', 'bi', 'bs', 'da', 'af', 'nl', 'ua', 'lt', 'na'];
const continents = ['AF', 'OC', 'SA', 'AS', 'NA', 'EU', 'SA', 'AS', 'NA', 'EU'];
const countries = ['RU', 'NO', 'BA', 'US', 'UA', 'CA', 'SG', 'FR', 'KE', 'AG'];

export const generateRandomStuff = () => {
  const num = Math.round(Math.random() * (100 / 4));
  let result = '';
  if (Math.round(num / 10) === 2) {
    result = `/country/${countries[num % 10]}`;
  }
  if (Math.round(num / 10) === 1) {
    result = `/language/${languages[num % 10]}`;
  }
  if (Math.round(num / 10) === 0) {
    result = `/continent/${continents[num % 10]}`;
  }

  return result;
};
