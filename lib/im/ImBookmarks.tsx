import { renderIcon } from "../index";
  export function ImBookmarks(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M4 2v14l5-5 5 5V2zm8-2H2v14l1-1V1h9z"/>'
      }, props)
  };
  export default ImBookmarks;