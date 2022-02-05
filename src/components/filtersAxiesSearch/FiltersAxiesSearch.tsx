import { useQuery } from "@apollo/client";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonModal,
  IonRange,
  IonRow,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { GetAxieBriefList } from "../../graphql/queries/axie";

const FiltersAxiesSearch = ({
  showModal,
  setMyAxiesArray,
  page,
  setShowModal,
}) => {
  const [checkboxList, setCheckboxList] = useState([
    { val: "Beast", isChecked: true },
    { val: "Aquatic", isChecked: true },
    { val: "Plant", isChecked: true },
    { val: "Bug", isChecked: true },
    { val: "Bird", isChecked: true },
    { val: "Reptile", isChecked: true },
  ]);

  const [classAxie, setClassAxie] = useState(null as any);
  const [breedCount, setbreedCount] = useState(null as any);
  const [hp, setHp] = useState([21, 67] as any);
  const [skill, setSkill] = useState([21, 67] as any);
  const [speed, setSpeed] = useState([21, 67] as any);
  const [morale, setMorale] = useState([21, 67] as any);
  const { loading, error, data } = useQuery(GetAxieBriefList, {
    variables: {
      from: page,
      size: 24,
      sort: "PriceAsc",
      auctionType: "Sale",
      owner: null,
      criteria: {
        region: null,
        parts: null,
        bodyShapes: null,
        classes: classAxie,
        stages: null,
        numMystic: null,
        pureness: null,
        title: null,
        breedable: null,
        breedCount: breedCount,
        hp: hp,
        skill: skill,
        speed: speed,
        morale: morale,
        purity: [],
        numJapan: null,
        numXmas: null,
      },
      filterStuckAuctions: false,
    },
    onCompleted: (data) => {
      const axiesData = data.axies.results;
      setMyAxiesArray(axiesData);
    },
  });

  const handleChangeHp = (e) => {
    const aux = e.detail.value;
    const aux2 = [aux.lower, aux.upper];
    setHp(aux2);
  };
  const handleChangeSkill = (e) => {
    const aux = e.detail.value;
    const aux2 = [aux.lower, aux.upper];
    setSkill(aux2);
  };

  const handleChangeSpeed = (e) => {
    const aux = e.detail.value;
    const aux2 = [aux.lower, aux.upper];
    setSpeed(aux2);
  };

  const handleChangeMorale = (e) => {
    const aux = e.detail.value;
    const aux2 = [aux.lower, aux.upper];
    setMorale(aux2);
  };

  const handleChangeClass = (e, i) => {
    const aux = [...checkboxList];
    aux[i].isChecked = e.detail.checked;
    setCheckboxList(aux);
  };

  useEffect(() => {
    const aux = [] as any;
    checkboxList.forEach((el) => {
      if (el.isChecked) {
        aux.push(el.val);
      }
    });
    console.log(aux);
    setClassAxie(aux);
  }, [checkboxList]);
  return (
    <IonModal isOpen={showModal}>
      <IonContent fullscreen color="primary">
        <p>Axie Class</p>
        <IonRow>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonCol sizeMd="4" sizeXs="6">
              <IonItem key={i}>
                <IonLabel color="light">{val}</IonLabel>
                <IonCheckbox
                  color="light"
                  slot="end"
                  value={val}
                  checked={isChecked}
                  onIonChange={(e) => {
                    handleChangeClass(e, i);
                  }}
                />
              </IonItem>
            </IonCol>
          ))}
        </IonRow>
        <p>Breeding count</p>
        <IonRange
          pin={true}
          value={breedCount}
          snaps={true}
          onIonChange={(e) => setbreedCount(e.detail.value as number)}
          color="light"
          max={7}
          min={0}
        />
        <p>Health</p>
        <IonRange
          dualKnobs={true}
          min={27}
          pin={true}
          max={61}
          step={1}
          color="light"
          snaps={true}
          onIonChange={(e) => handleChangeHp(e)}
          value={{ lower: hp[0], upper: hp[1] }}
        />
        <p>Speed</p>
        <IonRange
          dualKnobs={true}
          min={27}
          pin={true}
          max={61}
          step={1}
          color="light"
          snaps={true}
          onIonChange={(e) => handleChangeSpeed(e)}
          value={{ lower: speed[0], upper: speed[1] }}
        />
        <p>Skill</p>
        <IonRange
          dualKnobs={true}
          min={27}
          pin={true}
          max={61}
          step={1}
          color="light"
          snaps={true}
          onIonChange={(e) => handleChangeSkill(e)}
          value={{ lower: skill[0], upper: skill[1] }}
        />
        <p>Morale</p>
        <IonRange
          dualKnobs={true}
          min={27}
          pin={true}
          max={61}
          step={1}
          color="light"
          snaps={true}
          onIonChange={(e) => handleChangeMorale(e)}
          value={{ lower: morale[0], upper: morale[1] }}
        />
        <IonButton
          onClick={() => setShowModal(false)}
          color="tertiary"
          className="w-full text-lg mt-2"
        >
          Cerrar
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default FiltersAxiesSearch;
