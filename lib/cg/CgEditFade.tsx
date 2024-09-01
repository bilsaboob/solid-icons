import { renderIcon } from "../index";
  export function CgEditFade(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path stroke-opacity=".3" stroke-width="4" d="M8 12c0-1.48.804-2.773 2-3.465v6.93A3.998 3.998 0 0 1 8 12Z"/><path stroke-opacity=".6" stroke-width="4" d="M14 15.465v-6.93c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465Z"/><path stroke-width="2" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"/>'
      }, props)
  };
  export default CgEditFade;