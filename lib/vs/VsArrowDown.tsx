import { renderIcon } from "../index";
  export function VsArrowDown(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m3.147 9 5 5h.707l5-5-.707-.707L9 12.439V2H8v10.44L3.854 8.292 3.147 9z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsArrowDown;