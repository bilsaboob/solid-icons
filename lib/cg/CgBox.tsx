import { renderIcon } from "../index";
  export function CgBox(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M10 12a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Z"/><path fill="currentColor" fill-rule="evenodd" d="M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm16 2H4a1 1 0 0 0-1 1v3h18V5a1 1 0 0 0-1-1ZM3 19v-9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgBox;