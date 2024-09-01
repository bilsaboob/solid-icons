import { renderIcon } from "../index";
  export function CgCross(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v3H7a1 1 0 0 0 0 2h4v7a1 1 0 1 0 2 0v-7h4a1 1 0 1 0 0-2h-4V6Z"/>'
      }, props)
  };
  export default CgCross;