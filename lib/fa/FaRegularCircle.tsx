import { renderIcon } from "../index";
  export function FaRegularCircle(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 512 512"},
        c: '<path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0z"/>'
      }, props)
  };
  export default FaRegularCircle;