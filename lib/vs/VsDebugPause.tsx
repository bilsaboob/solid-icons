import { renderIcon } from "../index";
  export function VsDebugPause(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M4.5 3H6v10H4.5V3zm7 0v10H10V3h1.5z"/>'
      }, props)
  };
  export default VsDebugPause;