import { renderIcon } from "../index";
  export function ImClock2(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.293 11.707L7 8.414V4h2v3.586l2.707 2.707-1.414 1.414z"/>'
      }, props)
  };
  export default ImClock2;