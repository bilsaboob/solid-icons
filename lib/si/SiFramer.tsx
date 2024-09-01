import { renderIcon } from "../index";
  export function SiFramer(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"/>'
      }, props)
  };
  export default SiFramer;