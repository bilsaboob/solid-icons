import { renderIcon } from "../index";
  export function RiWeatherCelsiusLine(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 10h-2a4 4 0 0 0-8 0v5a4 4 0 0 0 8 0h2a6 6 0 0 1-12 0v-5a6 6 0 0 1 12 0Z"/>'
      }, props)
  };
  export default RiWeatherCelsiusLine;