import { renderIcon } from "../index";
  export function ImContrast(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2 8a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6z"/>'
      }, props)
  };
  export default ImContrast;