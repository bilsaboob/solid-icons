import { renderIcon } from "../index";
  export function VsDebugStop(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m13 2 1 1v10l-1 1H3l-1-1V3l1-1h10Zm-.254 1.25H3.255v9.5h9.491v-9.5Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsDebugStop;