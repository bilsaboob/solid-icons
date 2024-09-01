import { renderIcon } from "../index";
  export function CgRecord(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgRecord;