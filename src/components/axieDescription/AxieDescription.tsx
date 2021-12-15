import { IonButton, IonContent, IonModal } from "@ionic/react";
import { getAxieImgFromId } from "../../utils";

import AxieCardDescription from "../axieCardDescription/AxieCardDescription";
import BreedingResultScore from "../breedingResultScore/BreedingResultScore";
import { Card } from "../cardExplorer";

const AxieDescription = ({ showModal, setShowModal, id }) => {
  const axie = { id: "7632279", class: "aquatic" };
  const parents = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.027",
      breedCount: "0/6",
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "Ξ 0.045",
      breedCount: "1/6",
    },
  ];
  const children = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.149",
      breedCount: "2/6",
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "Ξ 0.325",
      breedCount: "1/6",
    },
  ];
  const abilities = {
    back:  {
      name: "Scale Dart",
      alias: "Blue Moon",
      energy: "1",
      attack: "120",
      defense: "30",
      description: "Draw a card if target is in Last Stand.",
      attackType: "Ranged",
      class: "Aquatic",
      partType: "Back",
      imgUrl:
        "https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-04.png",
    },
    tail: {
      name: "Tail Slap",
      alias: "Nimo",
      energy: "0",
      attack: "20",
      defense: "0",
      description: "Gain 1 energy when comboed with another card.",
      attackType: "Melee",
      class: "Aquatic",
      partType: "Tail",
      imgUrl:
        "https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-04.png",
    },
    mouth: {
      name: "Fish Hook",
      alias: "Risky Fish",
      energy: "1",
      attack: "105",
      defense: "20",
      description:
        "Apply Attack+ to this Axie when attacking Plant, Reptile, or Dusk targets.",
      attackType: "Melee",
      class: "Aquatic",
      partType: "Mouth",
      imgUrl:
        "https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-08.png",
    },
    horns: {
      name: "Aquaponics",
      alias: "Anemone",
      energy: "1",
      attack: "80",
      defense: "35",
      description:
        "Successful attacks restore 50 HP for each Anemone part this Axie posseses.",
      attackType: "Ranged",
      class: "Aquatic",
      partType: "Horn",
      imgUrl:
        "https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-08.png",
    },
  };

  const salesHistory = [
    { buyer: "Ah21", seller: "af56", price: "0.043 Ξ " },
    { buyer: "afy6", seller: "oh57", price: " 0.054 Ξ " },
    { buyer: "afasday6", seller: "oeweh57", price: "0.027 Ξ " },
    { buyer: "afaway6", seller: "ohaw57", price: "0.152 Ξ " },
  ];

  const bodyParts = {
    mouth: "Risky Fish",
    eyes: "Clear",
    ears: "Nyan",
    back: "Blue Moon",
    tail: "Nimo",
    horns: "Anemone",
  };

  return (
    <IonModal isOpen={showModal} key={id}>
      <IonContent fullscreen color="primary">
        <div className="grid justify-items-center p-6">
          <div className="border border-white rounded-md p-2 bg-darkPurpleDarkest">
            <div className="flex justify-center items-center text-xl">
              <img
                width={32}
                src={`./assets/icon/axie-classes/${axie.class}.svg`}
              />
              <p className="ml-4">{`#${axie.id}`}</p>
            </div>
          </div>
          <div>
            <img width={256} src={getAxieImgFromId(7632279)} />
          </div>

          <div>
            <p>Stats</p>
            <BreedingResultScore
              BreedingResultScore={{
                Score: "Decent",
                ScoreArray: [44, 55, 35, 30],
              }}
            />
          </div>
          <div className="w-full">
            <p>Body parts</p>
            <div className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest m-1 p-2">
              <div className="flex justify-between">
                <div className=" flex flex-col items-start w-1/2">
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/eyes.svg" />
                    <p className="text-sm ml-2"> {bodyParts.eyes}</p>
                  </div>
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/ears.svg" />
                    <p className="text-sm ml-2"> {bodyParts.ears}</p>
                  </div>
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/back.svg" />
                    <p className="text-sm ml-2"> {bodyParts.back}</p>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/2">
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/mouth.svg" />
                    <p className="text-sm ml-2"> {bodyParts.mouth}</p>
                  </div>
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/horn.svg" />
                    <p className="text-sm ml-2">{bodyParts.horns}</p>
                  </div>
                  <div className="flex items-center">
                    <img width={36} src="./assets/icon/axie-parts/tail.svg" />
                    <p className="text-sm ml-2"> {bodyParts.tail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2">
            <p>Abilities</p>
            <div className="-indigo-500/50 m-1 p-2  grid grid-cols-2 w-full ">
              <Card
                size="small"
                attack={abilities.back.attack}
                defense={abilities.back.defense}
                description={abilities.back.description}
                energy={abilities.back.energy}
                imgUrl={abilities.back.imgUrl}
                name={abilities.back.name}
              />
              <Card
                size="small"
                attack={abilities.mouth.attack}
                defense={abilities.mouth.defense}
                description={abilities.mouth.description}
                energy={abilities.mouth.energy}
                imgUrl={abilities.mouth.imgUrl}
                name={abilities.mouth.name}
              />
              <Card
                size="small"
                attack={abilities.horns.attack}
                defense={abilities.horns.defense}
                description={abilities.horns.description}
                energy={abilities.horns.energy}
                imgUrl={abilities.horns.imgUrl}
                name={abilities.horns.name}
              />
              <Card
                size="small"
                attack={abilities.tail.attack}
                defense={abilities.tail.defense}
                description={abilities.tail.description}
                energy={abilities.tail.energy}
                imgUrl={abilities.tail.imgUrl}
                name={abilities.tail.name}
              />
            </div>
          </div>
          <div>
            <p>Parents</p>
            <div className="grid grid-cols-2 justify-items-center">
              {parents.map((axie) => {
                return (
                  <AxieCardDescription
                    key={axie._id}
                    _id={axie._id}
                    image={axie.image}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <p>Children</p>
            <div className="grid grid-cols-2 justify-items-center">
              {children.map((axie) => {
                return (
                  <AxieCardDescription
                    key={axie._id}
                    _id={axie._id}
                    image={axie.image}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <p>Sales history</p>
            <div className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest w-full m-1 p-2">
              <div className="grid grid-cols-3 justify-items-center">
                <p>Buyer</p>
                <p>Seller</p>
                <p>Price</p>
              </div>
              <div className="grid grid-rows-3 justify-items-center">
                {salesHistory.map((sale) => {
                  return (
                    <div className="grid grid-cols-3 justify-items-center w-full p-2 text-sm">
                      <div>{sale.buyer}</div>
                      <div>{sale.seller}</div>
                      <div>{sale.price}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <IonButton onClick={setShowModal} color="tertiary">
            Close Modal
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AxieDescription;
