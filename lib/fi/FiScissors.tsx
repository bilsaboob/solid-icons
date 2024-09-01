import { renderIcon } from "../index";
  export function FiScissors(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M6 3A3 3 0 1 0 6 9 3 3 0 1 0 6 3z"/><path d="M6 15A3 3 0 1 0 6 21 3 3 0 1 0 6 15z"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>'
      }, props)
  };
  export default FiScissors;