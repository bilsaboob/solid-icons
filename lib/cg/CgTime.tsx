import { renderIcon } from "../index";
  export function CgTime(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M9 7h2v5h5v2H9V7Z"/><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgTime;