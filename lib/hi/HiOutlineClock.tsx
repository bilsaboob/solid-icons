import { renderIcon } from "../index";
  export function HiOutlineClock(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","viewBox":"0 0 24 24"},
        c: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>'
      }, props)
  };
  export default HiOutlineClock;