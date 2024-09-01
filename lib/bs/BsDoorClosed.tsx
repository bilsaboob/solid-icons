import { renderIcon } from "../index";
  export function BsDoorClosed(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/><path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>'
      }, props)
  };
  export default BsDoorClosed;