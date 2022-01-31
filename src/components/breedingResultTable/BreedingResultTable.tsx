const BreedingResultTable = ({ breedAxieGenes }) => {
  const capitalizeFirstChar = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  return (
    <div className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest">
      <div className="grid grid-cols-3 justify-items-center py-6 border-t border-white">
        <div>
          <p>D</p>
        </div>
        <div>
          <p>R1</p>
        </div>
        <div>
          <p>R2</p>
        </div>
      </div>

      {["eyes", "ears", "back", "mouth", "horn", "tail"].map((key, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-3 justify-items-center py-6 border-t border-white "
          >
            <div>
              <p
                className={`text-sm text-cl${capitalizeFirstChar(
                  breedAxieGenes.d[key].d.cls
                )}`}
              >
                {breedAxieGenes.d[key].d.name}
              </p>
            </div>
            <div>
              <p
                className={`text-sm text-cl${capitalizeFirstChar(
                  breedAxieGenes.r1[key].r1.cls
                )}`}
              >
                {breedAxieGenes.r1[key].r1.name}
              </p>
            </div>
            <div>
              <p
                className={`text-sm text-cl${capitalizeFirstChar(
                  breedAxieGenes.r2[key].r2.cls
                )}`}
              >
                {breedAxieGenes.r2[key].r2.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreedingResultTable;
