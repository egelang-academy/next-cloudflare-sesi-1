import { useEffect, useState } from "react";

const StatePage = () => {
  const [state, setState] = useState("Hello world");

  useEffect(() => {
    const ctrl = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello", { signal: ctrl.signal });
        const data: any = await response.json();
        setState(data.text);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
    return () => {};
  }, [state]);

  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <div className="text-2xl bg-blue-900 p-10 text-white">{state}</div>
      </div>
    </>
  );
};

export default StatePage;
