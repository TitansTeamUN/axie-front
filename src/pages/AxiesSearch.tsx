import { IonContent, IonPage, IonSearchbar,IonButton, IonIcon, IonModal, IonRange, IonPopover} from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";
import { filter,remove, add} from "ionicons/icons";

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

  const [value, setValue] = useState(0);
  const [value_price, setValuePrice] = useState(0);
  const [popoverState, setShowPopover] = useState(
    { showPopover: false, event: undefined }
    );
    /*
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 40, upper: 434 });
*/
  let openModal = false
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

  useEffect(() => {
    let aux = [] as any;
    myAxies.forEach((el) => {
      if (el.score < value) {
        aux.push(el);
        setMyAxiesArray(aux);
      }
    });
  }, [value]);


  useEffect(() => {
    let aux = [] as any;
    myAxies.forEach((el) => {
      if (parseInt(el.value) < value_price) {
        aux.push(el);
        setMyAxiesArray(aux);
      }
    });
  }, [value_price]);


  const handleFilters = (e) =>{
    openModal = true
    setShowPopover({ showPopover: true, event: e })
  }

  return (
    <div>
      <IonPage>
        <Header menu="menuAxiesSearch" title="Axies search" />
        <IonContent fullscreen color="primary">
          <div className="flex justify-evenly">
          <IonSearchbar
            color="light"
            onIonChange={(e) => {
              setSearch(e.detail.value!);
            }}
          />
            <IonButton
                id="trigger-button"
                color="tertiary"
                onClick={handleFilters}
              >
                 <IonIcon icon={filter}></IonIcon>
                </IonButton>
          </div>

          <IonModal
              isOpen={openModal}
           >
        <IonContent>Modal Content</IonContent>
      </IonModal>

      <IonPopover
              event={popoverState.event}
              isOpen={popoverState.showPopover}
              onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonContent>
        <div className="flex justify-center">
              <p>Score</p> 
            </div>
            <div className="test-style -mt-10;">
              <IonRange color="tertiary" pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)} >
                    <IonIcon size="small" slot="start" icon={remove} />
                    <IonIcon slot="end" icon={add} />        
                </IonRange>
            </div>
      
      
      <div className="flex justify-center">
        <p>Price</p> 
      </div>
            
      <div className="test-style -mt-10;">
              <IonRange color="tertiary" pin={true} value={value_price} onIonChange={e => setValuePrice(e.detail.value as number)} >
                    <IonIcon size="small" slot="start" icon={remove} />
                    <IonIcon slot="end" icon={add} />        
                </IonRange>
            </div>
        </IonContent>
      </IonPopover>

          <div className="grid grid-cols-2">
            {myaxiexArray.map((el) => {
              return (
                <MyAxiesCard
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
    </div>
  );
};

export default AxiesSearch;
