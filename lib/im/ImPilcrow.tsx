import { renderIcon } from "../index";
  export function ImPilcrow(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M6 0h8v2h-2v14h-2V2H8v14H6V8a4 4 0 0 1 0-8z"/>'
      }, props)
  };
  export default ImPilcrow;