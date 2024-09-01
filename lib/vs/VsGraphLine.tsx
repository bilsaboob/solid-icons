import { renderIcon } from "../index";
  export function VsGraphLine(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z"/><path d="M13 3.207 7.854 8.354h-.708L5.5 6.707l-3.646 3.647-.708-.708 4-4h.708L7.5 7.293l5.146-5.147h.707l2 2-.707.708L13 3.207Z"/>'
      }, props)
  };
  export default VsGraphLine;