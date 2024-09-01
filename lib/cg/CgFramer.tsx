import { renderIcon } from "../index";
  export function CgFramer(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-opacity=".5" d="M12 21V9H6v6l6 6Z"/><path fill="currentColor" d="M18 9V3H6l6 6H6v6h12l-6-6h6Z"/>'
      }, props)
  };
  export default CgFramer;