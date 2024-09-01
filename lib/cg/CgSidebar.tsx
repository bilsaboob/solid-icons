import { renderIcon } from "../index";
  export function CgSidebar(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M21 20H7V4h14v16Zm-2-2H9V6h10v12Z" clip-rule="evenodd"/><path fill="currentColor" d="M3 20h2V4H3v16Z"/>'
      }, props)
  };
  export default CgSidebar;