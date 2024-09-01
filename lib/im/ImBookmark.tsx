import { renderIcon } from "../index";
  export function ImBookmark(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M3 0v16l5-5 5 5V0z"/>'
      }, props)
  };
  export default ImBookmark;