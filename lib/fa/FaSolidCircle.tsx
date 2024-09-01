import { renderIcon } from "../index";
  export function FaSolidCircle(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 512 512"},
        c: '<path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z"/>'
      }, props)
  };
  export default FaSolidCircle;