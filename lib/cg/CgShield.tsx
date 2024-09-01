import { renderIcon } from "../index";
  export function CgShield(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M7 8v5a5 5 0 0 0 10 0V8H7ZM5 4h14v9a7 7 0 1 1-14 0V4Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShield;