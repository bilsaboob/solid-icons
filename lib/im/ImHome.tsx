import { renderIcon } from "../index";
  export function ImHome(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m16 9.226-8-6.21-8 6.21V6.694l8-6.21 8 6.21zM14 9v6h-4v-4H6v4H2V9l6-4.5z"/>'
      }, props)
  };
  export default ImHome;