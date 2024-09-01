import { renderIcon } from "../index";
  export function FiPercent(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M19 5 5 19"/><path d="M6.5 4A2.5 2.5 0 1 0 6.5 9 2.5 2.5 0 1 0 6.5 4z"/><path d="M17.5 15A2.5 2.5 0 1 0 17.5 20 2.5 2.5 0 1 0 17.5 15z"/>'
      }, props)
  };
  export default FiPercent;