import { renderIcon } from "../index";
  export function VsNotebook(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m2 2 1-1h9l1 1v12l-1 1H3l-1-1V2zm1 0v12h9V2H3zm1 2 1-1h5l1 1v1l-1 1H5L4 5V4zm1 0v1h5V4H5zm10 1h-1v2h1V5zm-1 3h1v2h-1V8zm1 3h-1v2h1v-2z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsNotebook;