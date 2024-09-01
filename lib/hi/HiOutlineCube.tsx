import { renderIcon } from "../index";
  export function HiOutlineCube(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","viewBox":"0 0 24 24"},
        c: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>'
      }, props)
  };
  export default HiOutlineCube;