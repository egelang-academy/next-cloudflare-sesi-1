import { useEffect, useState } from "react";

const StatePage = () => {
  const [state, setState] = useState(1);

  useEffect(() => {
    const tm = setTimeout(() => setState((nilai) => nilai + 1), 1000);
    return () => clearTimeout(tm);
  }, []);
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
