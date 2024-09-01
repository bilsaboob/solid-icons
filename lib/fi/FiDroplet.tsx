import { renderIcon } from "../index";
  export function FiDroplet(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"/>'
      }, props)
  };
  export default FiDroplet;