import { renderIcon } from "../index";
  export function ImDrawer(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m15.89 10.188-4-5A.5.5 0 0 0 11.5 5h-7a.497.497 0 0 0-.39.188l-4 5A.5.5 0 0 0 0 10.5V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.497.497 0 0 0-.11-.312zM15 11h-3.5l-2 2h-3l-2-2H1v-.325L4.74 6h6.519l3.74 4.675V11z"/><path fill="currentColor" d="M11.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM12.5 10h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"/>'
      }, props)
  };
  export default ImDrawer;