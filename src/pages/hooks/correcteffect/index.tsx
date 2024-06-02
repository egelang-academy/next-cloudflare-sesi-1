import { useEffect, useState } from "react";

const StatePage = () => {
  const [state, setState] = useState(0);
  const [dll, setDll] = useState(0);

  useEffect(() => {
    setState((it) => it + 1);
    return () => setState(0);
  }, [state, dll]);
  // coba tambahkan dependecy

  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <div className="text-2xl bg-blue-900 p-10 text-white">{state}</div>
      </div>
    </>
  );
};

export default StatePage;
