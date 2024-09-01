import { renderIcon } from "../index";
  export function FiPauseCircle(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M10 15 10 9"/><path d="M14 15 14 9"/>'
      }, props)
  };
  export default FiPauseCircle;