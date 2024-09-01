import { renderIcon } from "../index";
  export function ImMan(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M9 1.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9 1.5zM9 4H6a1 1 0 0 0-1 1v5h1v6h1.25v-6h.5v6H9v-6h1V5a1 1 0 0 0-1-1z"/>'
      }, props)
  };
  export default ImMan;