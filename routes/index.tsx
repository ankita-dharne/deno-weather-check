import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import CreateSubmit from "../islands/Submit.tsx";
import WeatherResp from "../data/interface.ts";
import Header from "../components/Header.tsx";

export default function Home({ data }: PageProps<WeatherResp | null>) {
    return (
      <div class="flex flex-col min-h-screen">
        <div class="flex-grow relative">
          <img src="/sky_bg.jpeg" style="z-index: -999999;" class="absolute w-screen min-h-screen"/>
          <div style="display:flex; flex-direction:row" class="flex">
            <div class="mx-auto rounded-lg max-w-screen-md h-1/6 mt-24">
              <Header></Header>
              <CreateSubmit></CreateSubmit>
            </div>
          </div>
        </div>
      </div>
    );
}
