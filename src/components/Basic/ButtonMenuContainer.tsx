import { Link } from "react-router-dom";

const ButtonMenuContainer = (props: { name: string; link: string }) => {
  return (
    <button
      type="button"
      className="text-center bg-purple-800 p-4 w-1/3 rounded-lg font-bold block mx-auto"
    >
      <Link
        to={{
          pathname: props.link,
        }}
        className="text-white"
      >
        {props.name}
      </Link>
    </button>
  );
};

export default ButtonMenuContainer;
