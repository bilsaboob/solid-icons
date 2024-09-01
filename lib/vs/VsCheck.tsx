import { renderIcon } from "../index";
  export function VsCheck(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m14.431 3.323-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsCheck;