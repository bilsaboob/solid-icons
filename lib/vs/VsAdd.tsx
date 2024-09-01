import { renderIcon } from "../index";
  export function VsAdd(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/>'
      }, props)
  };
  export default VsAdd;