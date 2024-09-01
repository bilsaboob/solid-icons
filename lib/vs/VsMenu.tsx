import { renderIcon } from "../index";
  export function VsMenu(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"/>'
      }, props)
  };
  export default VsMenu;