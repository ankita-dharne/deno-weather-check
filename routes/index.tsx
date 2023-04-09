import { Head } from "$fresh/runtime.ts";
import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import CreateSubmit from "../islands/Submit.tsx";
import WeatherResp from "../data/interface.ts";
import Header from "../islands/Header.tsx";

export default function Home({ data }: PageProps<WeatherResp | null>) {
  if (!data) {
    return (
      <div style="background-image: url(/sky_bg.jpeg);display:flex;min-height:800px;">
        <div class="p-8 mx-auto rounded-lg max-w-screen-md bg-white dark:bg-gray-400 h-1/6 mt-24">
          <Header></Header>
          <CreateSubmit></CreateSubmit>
        </div>
        {
          /* <Head>
          <title>Weather App</title>
        </Head>
        <div class="p-8 mx-auto rounded-lg max-w-screen-md bg-white dark:bg-gray-400 h-1/6 mt-24">
          <img
            src="/app-icon.png"
            width="100px"
            class="mx-auto"
            alt="weather"
          />
          <p class="my-10 text(enter 3xl black)">
            Weather App!
          </p> */
        }
        {
          /* <div>
              <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter city name</label>
              <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="city" required/>
          </div><br></br> */
        }
        {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        {/* </div> */}
      </div>
    );
  }
  return (
    <div style="background-image: url(/sky_bg.jpeg);display:flex;min-height:800px;">
      <div class="p-8 mx-auto rounded-lg max-w-screen-md bg-white dark:bg-gray-400 h-1/6 mt-24">
        <Header></Header>
        <p class="my-10 text(enter 3xl white)">
          ${data.data.name} Weather!
        </p>
        <p class="my-14 text(enter 3xl white) align:center">
          Tempurature : ${data.data.main.temp} <span>&#176;</span>
        </p>
        <p class="my-8 text(enter 2xl white)">
          Humidity: ${data.data.main.humidity} <span>&#176;</span>
        </p>
      </div>
    </div>
  );
}
