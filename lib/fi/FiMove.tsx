import { renderIcon } from "../index";
  export function FiMove(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M5 9 2 12 5 15"/><path d="M9 5 12 2 15 5"/><path d="M15 19 12 22 9 19"/><path d="M19 9 22 12 19 15"/><path d="M2 12 22 12"/><path d="M12 2 12 22"/>'
      }, props)
  };
  export default FiMove;