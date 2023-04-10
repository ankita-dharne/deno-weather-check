import { Handlers } from "$fresh/server.ts";
import { json, ReqWithBody } from 'https://deno.land/x/parsec@0.1.1/mod.ts';
import { getWeather } from "https://deno.land/x/deno_weather@v0.1.9/mod.ts";
import WeatherResp from "../../data/interface.ts";

export const handler: Handlers <WeatherResp | null> = {
    async POST(_req, _ctx) {
        const body: ReqWithBody = _req;
        await json(body);
        const reqCity = body.parsedBody?.city;
        const reqCountry = body.parsedBody?.country; 

        if (!reqCity || !reqCountry) {
            const body = {
                success: false,
                data: 'City or country code not correctly added'
            }
            const resp = new Response(JSON.stringify(body), {
                status: 404,
            });
            return resp;
        } else {
            const weather: WeatherResp = await getWeather(reqCity + '', reqCountry +'')
            const  body = {
                success: true,
                data: weather
            }
            const response =  new Response(JSON.stringify(body), {
                status: 200
            });
            return response;
        }
    }
}