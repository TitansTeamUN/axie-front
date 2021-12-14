import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Basic";

import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const MyAxies = () => {
  const myAxies = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.019",
      breedCount: "1 / 6",
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "Ξ 0.027",
      breedCount: "3 / 6",
    },
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 43543,
      value: "Ξ 0.12",
      breedCount: "0 / 6",
    },
    {
      _id: "#4564576456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 42,
      value: "Ξ 0.047",
      breedCount: "1 / 6",
    },
  ];

  const [search, setSearch] = useState("");
  const [myaxiexArray, setMyAxiesArray] = useState([] as any);

  useEffect(() => {
    let aux = [] as any;
    myAxies.forEach((axie) => {
      if (axie._id.includes(search)) {
        aux.push(axie);
        setMyAxiesArray(aux);
      }
    });
  }, [search]);

  return (
    <IonPage>
      <Header menu="menuMyAxies" title="My Axies" />
      <IonContent fullscreen color="primary">
        <IonSearchbar
          color="light"
          onIonChange={(e) => {
            setSearch(e.detail.value!);
          }}
        />
        <div className="grid grid-cols-2">
          {myaxiexArray.map((axie) => {
            return (
              <MyAxiesCard
                key={axie._id}
                _id={axie._id}
                image={axie.image}
                score={axie.score}
                value={axie.value}
                breedCount={axie.breedCount}
              />
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyAxies;
