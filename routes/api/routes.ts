import { Handlers } from "$fresh/server.ts";
import WeatherResp from "../../data/interface.ts";

export const routes: Handlers <WeatherResp | null> = {
    async POST(_req, _ctx) {
        const resp = await fetch("/api/weather", {
        method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(_req),
        });
        if (resp.status === 404) {
            return _ctx.render(null);
        }
        const response: WeatherResp = await resp.json();
        return _ctx.render(response);
    }
}

