import { renderIcon } from "../index";
  export function VsLoading(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsLoading;