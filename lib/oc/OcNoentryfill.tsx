import { renderIcon } from "../index";
  export function OcNoentryfill(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 12 12"},
        c: '<path d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm3 5H3v2h6Z"/>'
      }, props)
  };
  export default OcNoentryfill;