import { IonButton, IonContent, IonLoading, IonModal } from "@ionic/react";
import { getAxieImgFromId } from "../../utils";

import AxieCardDescription from "../axieCardDescription/AxieCardDescription";
import BreedingResultScore from "../breedingResultScore/BreedingResultScore";
import { Card } from "../cardExplorer";
import { GetAxieDetail, GetParentsBrief } from "../../graphql/queries/axie";
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
    matronId: "",
    sireId: "",
  });

  const [abilities, setAbilities] = useState([] as any);
  const [parents, setParents] = useState({} as any);
  const [finalizado, setFinalizado] = useState(false);

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

  var { loading, error, data } = useQuery(GetAxieDetail, {
    variables: {
      axieId: id,
    },
    onCompleted: (data) => {
      const axiesData = data.axie;
      console.log("Data axie", axiesData);
      setAxie(axiesData);
      setFinalizado(true);
    },
    skip: !showModal,
  });

  data = useQuery(GetParentsBrief, {
    variables: {
      matronId: axie?.matronId,
      sireId: axie?.sireId,
    },
    onCompleted: (data) => {
      console.log("Data parents", data);
      setParents(data);
    },
    skip: !finalizado,
  });

  useEffect(() => {
    console.log("Mostrar o no modal", showModal);
  }, []);

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
                    {axie.parts.map((part, index) => {
                      return index < 3 ? (
                        <div key={index} className="flex items-center">
                          <img
                            width={36}
                            src={`./assets/icon/axie-parts/${part.type}.svg`}
                          />
                          <p className="text-sm ml-2">{part.name}</p>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                  <div className=" flex flex-col items-start w-1/2">
                    {axie.parts.map((part, index) => {
                      return index >= 3 ? (
                        <div key={index} className="flex items-center">
                          <img
                            width={36}
                            src={`./assets/icon/axie-parts/${part.type}.svg`}
                          />
                          <p className="text-sm ml-2">{part.name}</p>
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
                {abilities.map((ability, index) => {
                  return (
                    <Card
                      key={index}
                      size="small"
                      attack={ability.attack}
                      defense={ability.defense}
                      description={ability.description}
                      energy={ability.energy}
                      imgUrl={ability.imgUrl}
                      name={ability.name}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              {parents.matron && parents.sire && (
                <>
                  <p>Parents</p>
                  <div className="grid grid-cols-2 justify-items-center">
                    <AxieCardDescription
                      key={parents.matron.id}
                      _id={parents.matron.id}
                      image={parents.matron.image}
                      axieClass={parents.matron.class}
                    />
                    <AxieCardDescription
                      key={parents.sire.id}
                      _id={parents.sire.id}
                      image={parents.sire.image}
                      axieClass={parents.sire.class}
                    />
                  </div>
                </>
              )}
            </div>
            <div>
              {axie.children.length > 0 && (
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
              )}
            </div>
            <IonButton onClick={setShowModal} color="tertiary">
              Close Modal
            </IonButton>
          </div>
        ) : (
          <>
            <IonLoading
              isOpen={loading}
              message={"Cargando..."}
              duration={5000}
            />
          </>
        )}
      </IonContent>
    </IonModal>
  );
};

export default AxieDescription;
