import { renderIcon } from "../index";
  export function VsEmptyWindow(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M4 4h3v1H4v3H3V5H0V4h3V1h1v3zM1 14.5V9h1v5h12V7H8V6h6V4H8V3h6.5l.5.5v11l-.5.5h-13l-.5-.5z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsEmptyWindow;