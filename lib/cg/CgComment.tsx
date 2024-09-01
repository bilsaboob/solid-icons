import { renderIcon } from "../index";
  export function CgComment(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M17 9H7V7h10v2ZM7 13h10v-2H7v2Z"/><path fill="currentColor" fill-rule="evenodd" d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4H2Zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12h8Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgComment;