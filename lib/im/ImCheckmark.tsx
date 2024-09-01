import { renderIcon } from "../index";
  export function ImCheckmark(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M13.5 2 6 9.5 2.5 6 0 8.5l6 6 10-10z"/>'
      }, props)
  };
  export default ImCheckmark;