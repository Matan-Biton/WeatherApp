import Form from "./components/Form";
import { useAppSelector, useAppDispatch } from "./store/store";
import { toggleSearchBy } from "./store/weatherSlice";

function App() {
  const dispatch = useAppDispatch();
  const searchBy = useAppSelector((state) => state.weather.searchBy);
  const inputFields =
    searchBy === "city" ? ["City"] : ["Latitude", "Longitude"];

  function handleSearchBy() {
    dispatch(toggleSearchBy());
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-slate-200 flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-6xl py-4">What's The Weather</h1>
        <Form fields={inputFields} />
      </div>
      <button
        onClick={handleSearchBy}
        className="border-2 border-black rounded-md py-1 px-2"
      >{`Use ${searchBy === "city" ? "geo location" : "city"} instead`}</button>
    </div>
  );
}

export default App;
