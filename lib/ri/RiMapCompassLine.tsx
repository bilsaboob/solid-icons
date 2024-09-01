import { renderIcon } from "../index";
  export function RiMapCompassLine(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.5-11.5-2 5-5 2 2-5 5-2Z"/>'
      }, props)
  };
  export default RiMapCompassLine;