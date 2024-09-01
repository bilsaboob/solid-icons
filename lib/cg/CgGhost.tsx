import { renderIcon } from "../index";
  export function CgGhost(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M3 4h12v4H3V4ZM21 8h-4V4h4v4ZM3 10h18v4H3v-4ZM11 16H3v4h8v-4ZM13 16v4h8v-4h-8Z"/>'
      }, props)
  };
  export default CgGhost;