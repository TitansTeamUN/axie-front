import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";

import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const MyAxies = () => {
  const myAxies = [
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
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 43543,
      value: "$466",
      breedCount: 0,
    },
    {
      _id: "#4564576456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 42,
      value: "$4535",
      breedCount: 0,
    },
  ];
  const demoMenuOptions = [
    {
      label: "Option 1",
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 1");
      },
      rippleEffect: true,
    },
    {
      label: "Option 2",
      icon: "Home",
      slot: "",
      onItemClick: () => {
        console.log("clicked 2");
      },
      rippleEffect: true,
    },
  ];

  const [search, setSearch] = useState("");
  const [myaxiexArray, setMyAxiesArray] = useState([] as any);

  useEffect(() => {
    let aux = [] as any;
    myAxies.forEach((el) => {
      if (el._id.includes(search)) {
        aux.push(el);
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
          {myaxiexArray.map((el) => {
            return (
              <MyAxiesCard
                key={el._id}
                _id={el._id}
                image={el.image}
                score={el.score}
                value={el.value}
                breedCount={el.breedCount}
              />
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyAxies;
