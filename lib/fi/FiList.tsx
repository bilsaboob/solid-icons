import { renderIcon } from "../index";
  export function FiList(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M8 6 21 6"/><path d="M8 12 21 12"/><path d="M8 18 21 18"/><path d="M3 6 3.01 6"/><path d="M3 12 3.01 12"/><path d="M3 18 3.01 18"/>'
      }, props)
  };
  export default FiList;