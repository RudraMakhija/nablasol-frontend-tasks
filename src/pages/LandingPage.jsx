import { Link } from "react-router-dom";

const LandingPage = () => {


  return (


    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">These Tasks are done by Rudra Makhija.</h1>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-md">

        <Link to="/task1" className="w-full">
          <button className="cursor-pointer w-full bg-white px-4 py-2 rounded-lg text-lg text-black hover:bg-blue-300 transition">Task 1</button>
        </Link>

        <Link to="/task2" className="w-full">
          <button className="cursor-pointer w-full bg-white px-4 py-2 rounded-lg text-lg text-black hover:bg-blue-300 transition">Task 2</button>
        </Link>

      </div>

    </div>


  );
};

export default LandingPage;