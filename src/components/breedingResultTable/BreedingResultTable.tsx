const BreedingResultTable = ({ breedAxieGenes }) => {
  const capitalizeFirstChar = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  return (
    <div className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest">
      <div className="flex items-center py-4 border-t border-white">
        <div className="flex w-1/6 justify-center">
          <p>P</p>
        </div>
        <div className="flex w-5/18 justify-center">
          <p>D</p>
        </div>
        <div className="flex w-5/18 justify-center">
          <p>R1</p>
        </div>
        <div className="flex w-5/18 justify-center">
          <p>R2</p>
        </div>
      </div>

      {["eyes", "ears", "back", "mouth", "horn", "tail"].map((key, index) => {
        return (
          <div
            key={index}
            className="flex items-center py-4 border-t border-white "
          >
            <div className="flex w-1/6 justify-center">
              <img
                src={`./assets/icon/axie-parts/${key}.svg`}
                height={42}
                width={42}
              />
            </div>
            <div className="flex  w-5/18 justify-center">
              <p
                className={` text-sm text-cl${capitalizeFirstChar(
                  breedAxieGenes.d[key].d.cls
                )}`}
              >
                {breedAxieGenes.d[key].d.name}
              </p>
            </div>
            <div className="flex w-5/18 justify-center">
              <p
                className={`text-sm text-cl${capitalizeFirstChar(
                  breedAxieGenes.r1[key].r1.cls
                )}`}
              >
                {breedAxieGenes.r1[key].r1.name}
              </p>
            </div>
            <div className="flex w-5/18 justify-center">
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
