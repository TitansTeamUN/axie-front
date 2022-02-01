import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";

import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const AxiesSearch = () => {
  const myAxies = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.019",
      breedCount: 0,
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "Ξ 0.120",
      breedCount: 0,
    },
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 43543,
      value: "Ξ 0.024",
      breedCount: 0,
    },
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 42,
      value: "Ξ 1.56",
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
        <Header menu="menuAxiesSearch" title="Axies search" />
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
                  _id={el._id}
                  image={el.image}
                  name={el.score}
                  value={el.value}
                  breedCount={el.breedCount}
                />
              );
            })}
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default AxiesSearch;
