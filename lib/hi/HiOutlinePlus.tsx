import { renderIcon } from "../index";
  export function HiOutlinePlus(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","viewBox":"0 0 24 24"},
        c: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15"/>'
      }, props)
  };
  export default HiOutlinePlus;