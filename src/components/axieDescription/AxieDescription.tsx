import { IonButton, IonContent, IonModal } from "@ionic/react";
import { getAxieImgFromId } from "../../utils";

import AxieCardDescription from "../axieCardDescription/AxieCardDescription";
import BreedingResultScore from "../breedingResultScore/BreedingResultScore";
import { Card } from "../cardExplorer";
import { GetAxieDetail } from "../../graphql/queries/axie";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import cards from "../../utils/cards.json";

const AxieDescription = ({ showModal, setShowModal, id }) => {
  const [axie, setAxie] = useState({
    id: "",
    class: "",
    image: "",
    children: [
      {
        id: "",
        image: "",
        class: "",
      },
    ],
    parts: [
      {
        type: "",
        name: "",
      },
    ],
    stats: {
      hp: "",
      morale: "",
      skill: "",
      speed: "",
    },
  });

  const [abilities, setAbilities] = useState([] as any);

  useEffect(() => {
    var aux = [] as any;
    axie.parts.forEach((element) => {
      if (element.type !== "Eyes" && element.type !== "Ears") {
        cards.cards.forEach((el) => {
          if (el.alias === element.name) {
            aux.push(el);
          }
        });
      }
    });
    setAbilities(aux);
  }, [axie]);

  const { loading, error, data } = useQuery(GetAxieDetail, {
    variables: {
      axieId: id,
    },
    onCompleted: (data) => {
      const axiesData = data.axie;
      setAxie(axiesData);
    },
  });
  if (data) console.log("Data axie description", data);

  const parents = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.027",
      breedCount: "0/6",
      class: "",
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "Ξ 0.045",
      breedCount: "1/6",
      class: "",
    },
  ];

  return (
    <IonModal isOpen={showModal} key={id}>
      <IonContent fullscreen color="primary">
        {!loading ? (
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
              <img width={256} src={axie.image} />
            </div>
            <div>
              <p>Stats</p>
              <BreedingResultScore
                BreedingResultScore={{
                  Score: "Decent",
                  ScoreArray: [
                    axie.stats.hp,
                    axie.stats.speed,
                    axie.stats.skill,
                    axie.stats.morale,
                  ],
                }}
              />
            </div>
            <div className="w-full">
              <p>Body parts</p>
              <div className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest m-1 p-2">
                <div className="flex justify-between">
                  <div className=" flex flex-col items-start w-1/2">
                    {axie.parts.map((el, index) => {
                      return index < 3 ? (
                        <div className="flex items-center">
                          <img
                            width={36}
                            src={`./assets/icon/axie-parts/${el.type}.svg`}
                          />
                          <p className="text-sm ml-2">{el.name}</p>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                  <div className=" flex flex-col items-start w-1/2">
                    {axie.parts.map((el, index) => {
                      return index >= 3 ? (
                        <div className="flex items-center">
                          <img
                            width={36}
                            src={`./assets/icon/axie-parts/${el.type}.svg`}
                          />
                          <p className="text-sm ml-2">{el.name}</p>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-2">
              <p>Abilities</p>
              <div className="-indigo-500/50 m-1 p-2  grid grid-cols-2 w-full ">
                {abilities.map((el) => {
                  return (
                    <Card
                      size="small"
                      attack={el.attack}
                      defense={el.defense}
                      description={el.description}
                      energy={el.energy}
                      imgUrl={el.imgUrl}
                      name={el.name}
                    />
                  );
                })}
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
                      axieClass={axie.image}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              {axie.children.length > 0 ? (
                <>
                  <p>Children</p>
                  <div className="grid grid-cols-2 justify-items-center">
                    {axie.children.map((axie) => {
                      return (
                        <AxieCardDescription
                          key={axie.id}
                          _id={axie.id}
                          image={axie.image}
                          axieClass={axie.class}
                        />
                      );
                    })}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <IonButton onClick={setShowModal} color="tertiary">
              Close Modal
            </IonButton>
          </div>
        ) : (
          <></>
        )}
      </IonContent>
    </IonModal>
  );
};

export default AxieDescription;
