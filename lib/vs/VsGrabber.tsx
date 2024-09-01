import { renderIcon } from "../index";
  export function VsGrabber(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M15 6H1v1h14V6zm0 3H1v1h14V9z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsGrabber;