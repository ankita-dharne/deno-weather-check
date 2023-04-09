// import { tw } from "https://esm.sh/twind@0.16.16";
import { useState } from "preact/hooks";

export default function CreateSubmit() {
  const [q, setQ] = useState("");
  const [x, setX] = useState("");

  async function onSubmit(e:Event) {
    e.preventDefault();
    console.log("HIII>>>",q);
    console.log("HIII 22>>>",x);

    const resp = await fetch("/api/weather", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: q, country:x }),
      });
  }

  function handleCityInput(e:Event) {
    console.log("HERE>>>",q);
    setQ((e.target as HTMLTextAreaElement).value);
  }
  function handleCountryInput(e:Event) {
    console.log("HERE22>>>",x);
    setX((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div class="flex gap-2 w-full">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="city"
          onChange={handleCityInput}
          placeholder="city"
        /><br> </br>
        <input
          type="text"
          class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
          onChange={handleCountryInput}
          placeholder="country"
        /><br> </br>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit"
        >
        Get Weather report
        </button>
      </form>
    </div>
  );
}