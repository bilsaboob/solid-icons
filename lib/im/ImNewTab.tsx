import { renderIcon } from "../index";
  export function ImNewTab(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M3 1v12h12V1H3zm11 11H4V2h10v10zM2 14V3.5l-1-1V15h12.5l-1-1H2z"/><path fill="currentColor" d="M5.5 4 8 6.5l-3 3L6.5 11l3-3 2.5 2.5V4z"/>'
      }, props)
  };
  export default ImNewTab;