import { renderIcon } from "../index";
  export function ImMap(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m0 3 5-2v12l-5 2zM6 .5l5 3V15l-5-2.5zM12 3.5l4-3v12l-4 3z"/>'
      }, props)
  };
  export default ImMap;