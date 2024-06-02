import { memo, useCallback, useEffect, useState } from "react";

const ButtonClick = ({ callback }: { callback: () => void }) => {
  console.log("rendered");

  return (
    <button
      className="bg-red-400 p-2 text-white m-1 rounded"
      onClick={callback}
    >
      Incresment
    </button>
  );
};

// const ButtonClick2 = memo(({ callback }: { callback: () => void }) => {
//   console.log("rendered");
//   return (
//     <button
//       className="bg-red-400 p-2 text-white m-1 rounded"
//       onClick={callback}
//     >
//       Incresment
//     </button>
//   );
// });

// ButtonClick2.displayName = "ButtonClick2";

const StatePage = () => {
  const [state, setState] = useState(0);
  const [message, setMessage] = useState("Hello world");

  const callback = () => setState(state + 1);

  useEffect(() => {
    const tm = setTimeout(() => setMessage("Hello Egelang academy"), 1000);
    const tm2 = setTimeout(() => setMessage("Welcome to NextJS"), 3000);
    return () => {
      clearTimeout(tm);
      clearTimeout(tm2);
    };
  }, []);
  // coba tambahkan dependecy

  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <div className="text-2xl bg-blue-900 p-10 text-white">
          {message} - {state}
        </div>
        <ButtonClick callback={callback} />
      </div>
    </>
  );
};

export default StatePage;
