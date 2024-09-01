import { renderIcon } from "../index";
  export function BsCircleFill(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M8 0A8 8 0 1 0 8 16 8 8 0 1 0 8 0z"/>'
      }, props)
  };
  export default BsCircleFill;