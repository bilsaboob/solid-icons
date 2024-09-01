import { renderIcon } from "../index";
  export function VsDiffAdded(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12l.5-.5zM2 13h11V2H2v11z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 4H7v3H4v1h3v3h1V8h3V7H8V4z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsDiffAdded;