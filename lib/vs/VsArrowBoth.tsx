import { renderIcon } from "../index";
  export function VsArrowBoth(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m3 9 2.146 2.146-.707.708-3-3v-.708l3-3 .707.708L3 8h10l-2.146-2.146.707-.708 3 3v.708l-3 3-.707-.707L13 9H3z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsArrowBoth;