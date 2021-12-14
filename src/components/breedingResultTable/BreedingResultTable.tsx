const BreedingResultTable = ({ breedingResults }) => {
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
      {breedingResults.map((geneParts) => {
        return (
          <div className="grid grid-cols-3 justify-items-center py-6 border-t border-white">
            <div>
              <p>{geneParts[0]}</p>
            </div>
            <div>
              <p>{geneParts[1]}</p>
            </div>
            <div>
              <p>{geneParts[2]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreedingResultTable;
