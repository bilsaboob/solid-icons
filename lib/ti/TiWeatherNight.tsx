import { renderIcon } from "../index";
  export function TiWeatherNight(props:any) {
      return renderIcon({
        a: {"baseProfile":"tiny","version":"1.2","viewBox":"0 0 24 24"},
        c: '<path d="M10.5 20c-.861 0-1.71-.151-2.523-.451l-1.317-.485.89-1.087c1.275-1.56 1.95-3.454 1.95-5.477s-.675-3.917-1.951-5.477l-.89-1.087 1.317-.485A7.275 7.275 0 0 1 10.5 5c4.136 0 7.5 3.364 7.5 7.5S14.636 20 10.5 20zm-.509-2.024A5.507 5.507 0 0 0 16 12.5a5.507 5.507 0 0 0-6.009-5.476c.991 1.645 1.509 3.511 1.509 5.476s-.518 3.831-1.509 5.476z"/>'
      }, props)
  };
  export default TiWeatherNight;