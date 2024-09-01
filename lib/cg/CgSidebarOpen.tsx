import { renderIcon } from "../index";
  export function CgSidebarOpen(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M3 4h18v16H3V4Zm6 2h10v12H9V6Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgSidebarOpen;