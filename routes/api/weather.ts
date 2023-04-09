import { Handlers } from "$fresh/server.ts";
import { json, ReqWithBody } from 'https://deno.land/x/parsec@0.1.1/mod.ts';
import { getWeather } from "https://deno.land/x/deno_weather@v0.1.9/mod.ts";
import WeatherResp from "../../data/interface.ts";

export const weather: Handlers <WeatherResp | null> = {
    async POST(_req, _ctx) {
        console.log("POst>>>",_req);
        const body: ReqWithBody = _req;
        await json(body);
        console.log("POst  city>>>", body.parsedBody?.city)
        console.log("POst>>> countrycountry", body.parsedBody?.country)
        const reqCity = body.parsedBody?.city;
        const reqCountry = body.parsedBody?.country; 

        if (!reqCity || !reqCountry) {
            console.log("POst if>>>",_req);
            const body = {
                success: false,
                data: 'City or country code not correctly added'
            }
            return new Response(JSON.stringify(body), {
                status: 404,
            });
            // return _ctx.render(null);
        } else {
            console.log("POst else>>>",_req);
            const weather: WeatherResp = await getWeather(reqCity + '', reqCountry +'')
            const  body = {
                success: true,
                data: weather
            }
            // if (weather.success === false) {
            //     return _ctx.render(null);
            //   }
            //   const response: WeatherResp = await weather.json();
            // return _ctx.render(weather);
            // const response =  new Response(JSON.stringify(body), {
            //     status: 200
            // });
            return new Response(JSON.stringify(body), {
                status: 200
            });
        }
    }
}

