import { renderIcon } from "../index";
  export function VsArrowLeft(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m7 3.093-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsArrowLeft;