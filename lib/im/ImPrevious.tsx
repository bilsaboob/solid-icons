import { renderIcon } from "../index";
  export function ImPrevious(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/><path fill="currentColor" d="m7 8 4-3v6zM5 5h2v6H5V5z"/>'
      }, props)
  };
  export default ImPrevious;