import { renderIcon } from "../index";
  export function FiCalendar(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2 16 6"/><path d="M8 2 8 6"/><path d="M3 10 21 10"/>'
      }, props)
  };
  export default FiCalendar;