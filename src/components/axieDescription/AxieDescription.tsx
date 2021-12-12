import { IonButton, IonContent, IonModal } from "@ionic/react";
import BreedingResultScore from "../breedingResultScore/BreedingResultScore";
import MyAxiesCard from "../myAxies/MyAxiesCard";

const AxieDescription = ({ showModal, setShowModal, id }) => {
  const parents = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "$150",
      breedCount: 0,
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "$4",
      breedCount: 0,
    },
  ];
  const children = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "$150",
      breedCount: 0,
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "$4",
      breedCount: 0,
    },
  ];
  const abilities = {
    back: {
      name: "Shelter",
      alias: "Hermit",
      energy: "1",
      attack: "0",
      defense: "115",
      description: "Disable critical strikes on this Axie during this round.",
      attackType: "Melee",
      class: "Aquatic",
      partType: "Back",
      imgUrl:
        "https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-02.png",
    },
    tail: {
      name: "Tail Slap",
      alias: "Nimo",
      energy: "1",
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
    { buyer: "Ah21", seller: "af56", price: "$15USD" },
    { buyer: "afy6", seller: "oh57", price: "$18USD" },
    { buyer: "afasday6", seller: "oeweh57", price: "$17USD" },
    { buyer: "afaway6", seller: "ohaw57", price: "$40USD" },
  ];

  const bodyParts = {
    mouth: "Tiny Turtle",
    eyes: "Gero",
    ears: "Leafy",
    back: "Timber",
    tail: "Thorny Caterpillar",
    horns: "Lagging",
  };

  return (
    <IonModal isOpen={showModal} key={id}>
      <IonContent fullscreen color="primary">
        <div className="grid justify-items-center">
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Stats</p>
            <BreedingResultScore
              BreedingResultScore={{
                Score: "Decent",
                ScoreArray: [58, 34, 31, 41],
              }}
            />
          </div>
          <div>
            <p>Body parts</p>
            <div className="grid grid-rows-3 justify-items-center">
              <div className="grid grid-cols-2 justify-items-center">
                <div>
                  <p>Eyes: {bodyParts.eyes}</p>
                </div>
                <div>
                  <p>Ears: {bodyParts.ears}</p>
                </div>
                <div>
                  <p>Back: {bodyParts.back}</p>
                </div>
                <div>
                  <p>Mouth: {bodyParts.mouth}</p>
                </div>
                <div>
                  <p>Horns: {bodyParts.horns}</p>
                </div>
                <div>
                  <p>Tail: {bodyParts.tail}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Abilities</p>
          </div>
          <div>
            <p>Parents</p>
            {parents.map((el) => {
              return (
                <MyAxiesCard
                  key={el._id}
                  _id={el._id}
                  image={el.image}
                  score={el.score}
                  value={el.value}
                  myAxie={false}
                  breedCount={el.breedCount}
                />
              );
            })}
          </div>
          <div>
            <p>Children</p>
            {children.map((el) => {
              return (
                <MyAxiesCard
                  key={el._id}
                  _id={el._id}
                  image={el.image}
                  score={el.score}
                  value={el.value}
                  myAxie={false}
                  breedCount={el.breedCount}
                />
              );
            })}
          </div>
          <div>
            <p>Sales history</p>
            <div className="grid grid-rows-3 justify-items-center">
              <div className="grid grid-cols-3 justify-items-center">
                <p>Buyer</p>
                <p>Seller</p>
                <p>Price</p>
              </div>
              <div className="grid grid-rows-3 justify-items-center">
                {salesHistory.map((el) => {
                  return (
                    <div className="grid grid-cols-3 justify-items-center">
                      <div>{el.buyer}</div>
                      <div>{el.seller}</div>
                      <div>{el.price}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <IonButton onClick={setShowModal} color="tertiary">
          Close Modal
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default AxieDescription;
