import { Link } from "react-router-dom";

const ButtonMenuContainer = ({ name, link }) => {
  return (
    <button
      type="button"
      className="text-center bg-purple-800 p-4 w-1/3 rounded-lg font-bold block mx-auto"
    >
      <Link
        to={{
          pathname: link,
        }}
        className="text-white"
      >
        {name}
      </Link>
    </button>
  );
};

export default ButtonMenuContainer;
