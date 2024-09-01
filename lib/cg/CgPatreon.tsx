import { renderIcon } from "../index";
  export function CgPatreon(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M21 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" opacity=".5"/><path fill="currentColor" d="M3 4h4v16H3V4Z"/>'
      }, props)
  };
  export default CgPatreon;