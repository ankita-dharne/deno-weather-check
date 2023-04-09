import { useState } from "preact/hooks";

interface InitialData {
  name: string;
  temp: string;
  humidity: string;
}
export default function CreateSubmit(props: InitialData) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [currentData, setData] = useState({
    name: props.name,
    temp: props.temp,
    humidity: props.humidity,
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    let response;
    console.log("Refresh!!");
    response = await fetch("/api/weather/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city, country }),
    });
    try {
      const newData = await response.json();
      const data = JSON.parse(newData.data);
      console.log({ data });
      const newCurrentData = {
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
      };

      setData((currentData) => (newCurrentData));
      console.log({ currentData });
    } catch (error) {
      console.error(error);
    }
  };

  function handleCityInput(e: Event) {
    setCity((e.target as HTMLTextAreaElement).value);
  }
  function handleCountryInput(e: Event) {
    setCountry((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div>
      <div class="px-8 py-2 pb-8 mx-auto rounded-b-lg max-w-screen-md  dark:bg-sky-400">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="city"
            onChange={handleCityInput}
            placeholder="city"
          />
          <br></br>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="country"
            onChange={handleCountryInput}
            placeholder="country"
          />
          <br></br>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit">
            Get Weather report
          </button>
        </form>
      </div>
      <div>
        {currentData && currentData.name
          ? (
            <div class="p-6 rounded-lg max-w-screen-md bg-white dark:bg-blue-400 mt-4">
            <div class="px-4 py-3 rounded-lg max-w-screen-md bg-white">
              <p class="mt-3 mb-6 text-1xl text-gray-900 dark:text-black">
                City : {currentData.name ? currentData.name : ""} Weather!
              </p>
              <p class="my-6 text-1xl text-gray-900 dark:text-black">
                Tempurature : {currentData.temp ? currentData.temp : ""}{" "}
                <span>&#176;</span>
              </p>
              <p class="mb-3 mt-6  text-1xl text-gray-900 dark:text-black">
                Humidity: {currentData.humidity ? currentData.humidity : ""}
                {" "}
                <span>&#176;</span>
              </p>
            </div>
            </div>
          )
          : ""}
      </div>
    </div>
  );
}
