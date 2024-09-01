import { renderIcon } from "../index";
  export function VsStarFull(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M9.595 6.252 8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsStarFull;