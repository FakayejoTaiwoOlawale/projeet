import { Link } from "react-router-dom";

const BlackPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Link
        to={"/"}
        className="px-2 py-1 mx-auto bg-blue-500 text-2xl text-white"
      >
        Back to home
      </Link>
    </div>
  );
};

export default BlackPage;
