const Card = ({
  name,
  energy,
  attack,
  defense,
  description,
  imgUrl,
  size = "normal",
}) => {
  return (
    <div className={`p-4 relative ${size === "small" ? "w-44" : "w-52"}`}>
      <div
        className={`font-cursiveTwo absolute w-full text-center left-0 mt-3 ${
          size === "small" ? " text-xs" : ""
        }`}
      >
        {name}
      </div>
      <div
        className={`text-shadow-brown font-cursiveTwo absolute w-full ${
          size === "small" ? " text-lg left-8 mt-1" : "text-2xl left-8 mt-2"
        }`}
      >
        {energy}
      </div>
      <div
        className={`container-card-attdef flex rounded-full ${
          size === "small" ? "w-9 h-9 top-14 " : "w-11 h-11 top-16 text-xl"
        } left-0 font-cursiveTwo  justify-center items-center  absolute`}
      >
        <div className="rotateZ-45-deg absolute">
          <img
            src="./assets/icon/cards/attack.svg"
            className={`${size === "small" ? "w-4" : "w-5"}`}
          />
        </div>
        <div className="z-10 relative ">{attack}</div>
      </div>
      <div
        className={`container-card-attdef flex rounded-full ${
          size === "small" ? "w-9 h-9 top-24 " : "w-11 h-11 top-28 text-xl"
        } left-0 font-cursiveTwo  justify-center items-center absolute`}
      >
        <div className="absolute">
          <img src="./assets/icon/cards/defense.svg" className="w-8 h-8" />
        </div>
        <div className="z-10 relative">{defense}</div>
      </div>
      <div className={`absolute w-full text-center left-0 ${size === "small" ? "bottom-3 p-5" : "bottom-5 p-8"}  font-thin text-xxs`}>
        {description}
      </div>
      <div>
        <img src={imgUrl} />
      </div>
    </div>
  );
};

export default Card;
