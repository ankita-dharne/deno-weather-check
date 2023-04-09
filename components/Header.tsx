import { Head } from "$fresh/runtime.ts";

export default function Header() {
  return (
    <div class="px-8 py-2 pt-8 mx-auto rounded-t-lg max-w-screen-md">
      <Head>
        <title>Weather App</title>
      </Head>
      <img
        src="/app-icon.png"
        width="100px"
        class="mx-auto"
        alt="weather"
      />
      <p class="pt-4 pl-2 text-3xl text-gray-900 dark:text-white">
        Weather App!
      </p>
    </div>
  );
}
