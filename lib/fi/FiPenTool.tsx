import { renderIcon } from "../index";
  export function FiPenTool(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"/><path d="M11 9A2 2 0 1 0 11 13 2 2 0 1 0 11 9z"/>'
      }, props)
  };
  export default FiPenTool;