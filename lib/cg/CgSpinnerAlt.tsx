import { renderIcon } from "../index";
  export function CgSpinnerAlt(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"/>'
      }, props)
  };
  export default CgSpinnerAlt;