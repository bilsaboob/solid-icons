import { renderIcon } from "../index";
  export function CgCalendar(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M8 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"/><path fill="currentColor" fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgCalendar;