import { renderIcon } from "../index";
  export function VsCopy(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m4 4 1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3-3-3H5v10h8V7z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3 1 2 2v10l1 1V2h6.414l-1-1H3z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsCopy;