import { renderIcon } from "../index";
  export function CgSpinner(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" clip-rule="evenodd" opacity=".2"/><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"/>'
      }, props)
  };
  export default CgSpinner;