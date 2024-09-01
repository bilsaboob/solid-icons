import { renderIcon } from "../index";
  export function FiBattery(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="12" x="1" y="6" rx="2" ry="2"/><path d="M23 13 23 11"/>'
      }, props)
  };
  export default FiBattery;