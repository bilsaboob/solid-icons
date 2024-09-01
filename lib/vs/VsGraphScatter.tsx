import { renderIcon } from "../index";
  export function VsGraphScatter(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z"/><path d="M5 2H7V4H5z"/><path d="M12 1H14V3H12z"/><path d="M8 5H10V7H8z"/><path d="M5 9H7V11H5z"/><path d="M12 8H14V10H12z"/>'
      }, props)
  };
  export default VsGraphScatter;