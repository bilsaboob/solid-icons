import { renderIcon } from "../index";
  export function VsPlay(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M3.78 2 3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z"/>'
      }, props)
  };
  export default VsPlay;