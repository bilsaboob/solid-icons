import { renderIcon } from "../index";
  export function VsWindow(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M14.5 2h-13l-.5.5v11l.5.5h13l.5-.5v-11l-.5-.5zM14 13H2V6h12v7zm0-8H2V3h12v2z"/>'
      }, props)
  };
  export default VsWindow;