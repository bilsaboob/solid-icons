import { renderIcon } from "../index";
  export function ImClock(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M10.293 11.707 7 8.414V4h2v3.586l2.707 2.707zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"/>'
      }, props)
  };
  export default ImClock;