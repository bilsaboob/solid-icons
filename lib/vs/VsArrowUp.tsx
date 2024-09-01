import { renderIcon } from "../index";
  export function VsArrowUp(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m13.854 7-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsArrowUp;