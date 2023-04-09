import { Head } from "$fresh/runtime.ts";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <img
        src="/app-icon.png"
        width="100px"
        class="mx-auto"
        alt="weather"
      />
      <p class="my-10 text(enter 3xl black)">
        Weather App!
      </p>
    </div>
  );
}
