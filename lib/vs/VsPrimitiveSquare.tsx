import { renderIcon } from "../index";
  export function VsPrimitiveSquare(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m3.5 4 .5-.5h8l.5.5v8l-.5.5H4l-.5-.5V4zm1 .5v7h7v-7h-7z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsPrimitiveSquare;