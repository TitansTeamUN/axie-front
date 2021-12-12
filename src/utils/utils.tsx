const getAxieImgFromId = (axieId) => {
  const baseurl =
    "https://storage.googleapis.com/assets.axieinfinity.com/axies/";
  return `${baseurl}${axieId}/axie/axie-full-transparent.png `;
};

export { getAxieImgFromId };
