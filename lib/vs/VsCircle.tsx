import { renderIcon } from "../index";
  export function VsCircle(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm2.61-4a2.61 2.61 0 1 1-5.22 0 2.61 2.61 0 0 1 5.22 0zM8 5.246z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsCircle;