import { renderIcon } from "../index";
  export function ImDrive(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M3 14h10a3 3 0 0 0 3-3H0a3 3 0 0 0 3 3zm10-2h1v1h-1v-1zm2-10H1l-1 8h16z"/>'
      }, props)
  };
  export default ImDrive;