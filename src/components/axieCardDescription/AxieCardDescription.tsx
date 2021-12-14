const AxieCardDescription = ({ _id, image }) => {
  return (
    <div
      className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest my-4 mx-2 pt-2"
      id={_id}
    >
      <div className="flex flex-col justify-items-center items-center">
        <div className="border border-black rounded-md px-2 py-1 bg-clReptile">
          <p>{_id}</p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div>
              <img src={image}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxieCardDescription;
