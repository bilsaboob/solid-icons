import { renderIcon } from "../index";
  export function ImMenu(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M1 3h14v3H1zm0 4h14v3H1zm0 4h14v3H1z"/>'
      }, props)
  };
  export default ImMenu;