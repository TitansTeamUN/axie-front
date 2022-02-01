import { AxieGene, HexType } from "agp-npm/dist/axie-gene";

const getAxieImgFromId = (axieId) => {
  const baseurl =
    "https://storage.googleapis.com/assets.axieinfinity.com/axies/";
  return `${baseurl}${axieId}/axie/axie-full-transparent.png `;
};

const getAxieGenefromHex = (numOfBits: number, hex: string) => {
  if (numOfBits === 512) {
    const axieGene512 = new AxieGene(hex, HexType.Bit512);
    return axieGene512;
  } else {
    //256 bits case
    const axieGene = new AxieGene(hex);
    return axieGene;
  }
};

const getDominantPart = (num) => {
  if (num < 0.375) {
    return ["one", "d"];
  } else if (num < 0.75) {
    return ["two", "d"];
  } else if (num < 0.84375) {
    return ["one", "r1"];
  } else if (num < 0.9375) {
    return ["two", "r1"];
  } else if (num < 0.96875) {
    return ["one", "r2"];
  } else return ["two", "r2"];
};

const getR1Part = (num) => {
  if (num < 0.115) {
    return ["one", "d"];
  } else if (num < 0.23) {
    return ["two", "d"];
  } else if (num < 0.48) {
    return ["one", "r1"];
  } else if (num < 0.73) {
    return ["two", "r1"];
  } else if (num < 0.815) {
    return ["one", "r2"];
  } else if (num < 0.9) {
    return ["two", "r2"];
  } else return ["two", "r2"]; //Mutation Threshold (fix this) 10%
};

const getR2Part = (num) => {
  if (num < 0.0033) {
    return ["one", "d"];
  } else if (num < 0.0066) {
    return ["two", "d"];
  } else if (num < 0.1199) {
    return ["one", "r1"];
  } else if (num < 0.2332) {
    return ["two", "r1"];
  } else if (num < 0.5665) {
    return ["one", "r2"];
  } else if (num < 0.9) {
    return ["two", "r2"];
  } else return ["two", "r2"]; //Mutation Threshold (fix this) 10%
};

const getClass = (num) => {
  if (num < 0.5) return 1;
  else return 2;
};

const decideGene = (key: string, part, select, axieGenesOne, axieGenesTwo) => {
  if (select[0] === "one") {
    return { [key]: axieGenesOne[part][select[1]] };
  } else {
    return { [key]: axieGenesTwo[part][select[1]] };
  }
};

const decideClass = (select, axieGenesOne, axieGenesTwo) => {
  if (select == 1) return axieGenesOne.cls;
  else return axieGenesTwo.cls;
};

const getBreedAxieGenes = (axieGenesOne, axieGenesTwo) => {
  const selectDominantBack = getDominantPart(Math.random());
  const selectDominantColor = getDominantPart(Math.random());
  const selectDominantEars = getDominantPart(Math.random());
  const selectDominantEyes = getDominantPart(Math.random());
  const selectDominantHorn = getDominantPart(Math.random());
  const selectDominantMouth = getDominantPart(Math.random());
  const selectDominantTail = getDominantPart(Math.random());

  const selectR1Back = getR1Part(Math.random());
  const selectR1Color = getR1Part(Math.random());
  const selectR1Ears = getR1Part(Math.random());
  const selectR1Eyes = getR1Part(Math.random());
  const selectR1Horn = getR1Part(Math.random());
  const selectR1Mouth = getR1Part(Math.random());
  const selectR1Tail = getR1Part(Math.random());

  const selectR2Back = getR2Part(Math.random());
  const selectR2Color = getR2Part(Math.random());
  const selectR2Ears = getR2Part(Math.random());
  const selectR2Eyes = getR2Part(Math.random());
  const selectR2Horn = getR2Part(Math.random());
  const selectR2Mouth = getR2Part(Math.random());
  const selectR2Tail = getR2Part(Math.random());

  const selectClass = getClass(Math.random());

  const dominantPartsSelected = {
    back: decideGene(
      "d",
      "back",
      selectDominantBack,
      axieGenesOne,
      axieGenesTwo
    ),
    color: decideGene(
      "d",
      "color",
      selectDominantColor,
      axieGenesOne,
      axieGenesTwo
    ),
    ears: decideGene(
      "d",
      "ears",
      selectDominantEars,
      axieGenesOne,
      axieGenesTwo
    ),
    eyes: decideGene(
      "d",
      "eyes",
      selectDominantEyes,
      axieGenesOne,
      axieGenesTwo
    ),
    horn: decideGene(
      "d",
      "horn",
      selectDominantHorn,
      axieGenesOne,
      axieGenesTwo
    ),
    mouth: decideGene(
      "d",
      "mouth",
      selectDominantMouth,
      axieGenesOne,
      axieGenesTwo
    ),
    tail: decideGene(
      "d",
      "tail",
      selectDominantTail,
      axieGenesOne,
      axieGenesTwo
    ),
  };
  const r1PartsSelected = {
    back: decideGene("r1", "back", selectR1Back, axieGenesOne, axieGenesTwo),
    color: decideGene("r1", "color", selectR1Color, axieGenesOne, axieGenesTwo),
    ears: decideGene("r1", "ears", selectR1Ears, axieGenesOne, axieGenesTwo),
    eyes: decideGene("r1", "eyes", selectR1Eyes, axieGenesOne, axieGenesTwo),
    horn: decideGene("r1", "horn", selectR1Horn, axieGenesOne, axieGenesTwo),
    mouth: decideGene("r1", "mouth", selectR1Mouth, axieGenesOne, axieGenesTwo),
    tail: decideGene("r1", "tail", selectR1Tail, axieGenesOne, axieGenesTwo),
  };
  const r2PartsSelected = {
    back: decideGene("r2", "back", selectR2Back, axieGenesOne, axieGenesTwo),
    color: decideGene("r2", "color", selectR2Color, axieGenesOne, axieGenesTwo),
    ears: decideGene("r2", "ears", selectR2Ears, axieGenesOne, axieGenesTwo),
    eyes: decideGene("r2", "eyes", selectR2Eyes, axieGenesOne, axieGenesTwo),
    horn: decideGene("r2", "horn", selectR2Horn, axieGenesOne, axieGenesTwo),
    mouth: decideGene("r2", "mouth", selectR2Mouth, axieGenesOne, axieGenesTwo),
    tail: decideGene("r2", "tail", selectR2Tail, axieGenesOne, axieGenesTwo),
  };

  const classSelected = decideClass(selectClass, axieGenesOne, axieGenesTwo);
  const allParts = {
    d: dominantPartsSelected,
    r1: r1PartsSelected,
    r2: r2PartsSelected,
  };

  let geneQuality = 0;

  //aux Map (like-for) for calculate gene quality as a value from 0 to 1
  const auxMap = ["eyes", "ears", "back", "mouth", "horn", "tail"].map(
    (keyPart, index) => {
      /*if (true)
        console.log(
          allParts.d[keyPart].d.cls,
          classSelected,
          allParts.d[keyPart].d
        );
      if (true)
        console.log(
          allParts.r1[keyPart].r1.cls,
          classSelected,
          allParts.r1[keyPart].r1
        );
      if (true)
        console.log(
          allParts.r2[keyPart].r2.cls,
          classSelected,
          allParts.r2[keyPart].r2
        );*/
      if (allParts.d[keyPart].d.cls === classSelected)
        geneQuality += 0.05555555555;
      if (allParts.r1[keyPart].r1.cls === classSelected)
        geneQuality += 0.05555555555;
      if (allParts.r2[keyPart].r2.cls === classSelected)
        geneQuality += 0.05555555555;
      return index;
    }
  );

  return {
    geneQualityPercentage: (geneQuality * 100).toFixed(2).toString(),
    cls: classSelected,
    ...allParts,
  };
};

export { getAxieImgFromId, getAxieGenefromHex, getBreedAxieGenes };
