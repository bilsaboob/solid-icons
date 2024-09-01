import { renderIcon } from "../index";
  export function ImTab(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M15 0h1v8h-1V0zM0 8h1v8H0V8zM5 11h11v2H5v2.5L1.5 12 5 8.5V11zM11 5H0V3h11V.5L14.5 4 11 7.5z"/>'
      }, props)
  };
  export default ImTab;