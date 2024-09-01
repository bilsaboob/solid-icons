import { renderIcon } from "../index";
  export function VsLockSmall(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="m3 8 1-1h8l1 1v5l-1 1H4l-1-1V8Zm1 0v5h8V8H4ZM11 7V5a3 3 0 0 0-6 0v2h1V5a2 2 0 1 1 4 0v2h1Z"/>'
      }, props)
  };
  export default VsLockSmall;