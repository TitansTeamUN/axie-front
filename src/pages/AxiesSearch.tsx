import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";

import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const AxiesSearch = () => {
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
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 2");
      },
      rippleEffect: true,
    },
  ];

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
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 42,
      value: "$4535",
      breedCount: 0,
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
    <div>
      <IonPage>
        <Header
          menu="menuAxiesSearch"
          title="Axies search"
          menuOptions={demoMenuOptions}
        />
        <IonContent fullscreen color="primary">
          <IonGrid>
            <IonRow>
              <IonSearchbar
                color="light"
                onIonChange={(e) => {
                  setSearch(e.detail.value!);
                }}
              />
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              {myaxiexArray.map((el) => {
                return (
                  <IonCol size="6">
                    <MyAxiesCard
                      _id={el._id}
                      image={el.image}
                      score={el.score}
                      value={el.value}
                      myAxie={false}
                      breedCount={el.breedCount}
                    ></MyAxiesCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default AxiesSearch;
