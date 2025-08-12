import { Link } from "react-router-dom";

const BlackPage = () => {
  return (
    // <div className="min-h-screen bg-black flex items-center justify-center">
    //   <Link
    //     to={"/"}
    //     className="px-2 py-1 mx-auto bg-blue-500 text-2xl text-white"
    //   >
    //     Back to home
    //   </Link>
    // </div>

    <div className="flex justify-center items-center min-h-screen bg-black">
      <Link to={"/"}>
      <div className="bg-white p-8 rounded shadow">Centered Box</div>
      </Link>
    </div>
  );
};

export default BlackPage;
