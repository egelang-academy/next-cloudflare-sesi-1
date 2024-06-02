import { useState } from "react";

const StatePage = () => {
  const [state, setState] = useState("Hello World");

  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <div>{state}</div>
        <button
          className="bg-blue-800 text-white p-2"
          onClick={() => setState("Helo egelang academy")}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default StatePage;
