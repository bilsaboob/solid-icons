import { renderIcon } from "../index";
  export function FiMonitor(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="20" height="14" x="2" y="3" rx="2" ry="2"/><path d="M8 21 16 21"/><path d="M12 17 12 21"/>'
      }, props)
  };
  export default FiMonitor;