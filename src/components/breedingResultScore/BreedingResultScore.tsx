import { IonCol, IonGrid, IonRow } from "@ionic/react";

const BreedingResultScore = ({ BreedingResultScore }) => {
  return (
    <IonGrid className="border-2 border-indigo-500/50 rounded-md m-1 p-2 bg-darkPurpleDarkest text-sm">
      <IonRow>
        <IonCol>
          <IonRow>
            <p>Meta Score: {BreedingResultScore.Score}</p>
          </IonRow>
        
          <IonRow>
            {BreedingResultScore.ScoreArray.map((stat, index) => {
              return (
                <IonCol>
                  {index === 0 && (
                    <img src="./assets/icon/axie-stats/health.svg" />
                  )}
                  {index === 1 && (
                    <img src="./assets/icon/axie-stats/speed.svg" />
                  )}
                  {index === 2 && (
                    <img src="./assets/icon/axie-stats/skill.svg" />
                  )}
                  {index === 3 && (
                    <img src="./assets/icon/axie-stats/morale.svg" />
                  )}
                  <p className="text-xs text-center mt-1">{stat}</p>
                </IonCol>
              );
            })}
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default BreedingResultScore;
