import { renderIcon } from "../index";
  export function VsDebugStackframeActive(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="m14.5 7.15-4.26-4.74L9.31 2H4.25L3 3.25v9.48l1.25 1.25h5.06l.93-.42 4.26-4.74V7.15zm-5.19 5.58H4.25V3.25h5.06l4.26 4.73-4.26 4.75z"/>'
      }, props)
  };
  export default VsDebugStackframeActive;