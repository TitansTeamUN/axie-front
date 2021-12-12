import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./BreedingResultTable.css";

const BreedingResultTable = ({ breedingResults }) => {
  return (
    <div className="border-4 border-indigo-500/50 rounded-md">
      <div className="grid grid-cols-3 justify-items-center py-6 container__BeedingResultTable">
        <div>
          <p>Dominante</p>
        </div>
        <div>
          <p>Recesivo 1</p>
        </div>
        <div>
          <p>Recesivo 2</p>
        </div>
      </div>
      {breedingResults.map((el) => {
        return (
          <div className="grid grid-cols-3 justify-items-center py-6 container__BeedingResultTable">
            <div>
              <p>{el[0]}</p>
            </div>
            <div>
              <p>{el[1]}</p>
            </div>
            <div>
              <p>{el[2]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreedingResultTable;
