import { renderIcon } from "../index";
  export function ImPrinter(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M4 1h8v2H4V1zM15 4H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h3v4h8v-4h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM2 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 7H5V9h6v5z"/>'
      }, props)
  };
  export default ImPrinter;