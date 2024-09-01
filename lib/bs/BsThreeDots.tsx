import { renderIcon } from "../index";
  export function BsThreeDots(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>'
      }, props)
  };
  export default BsThreeDots;