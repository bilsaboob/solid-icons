import { renderIcon } from "../index";
  export function ImList(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 0h4v4H0zm6 1h10v2H6zM0 6h4v4H0zm6 1h10v2H6zm-6 5h4v4H0zm6 1h10v2H6z"/>'
      }, props)
  };
  export default ImList;