import { renderIcon } from "../index";
  export function CgPlayButton(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="m15 12.33-6 4.33V8l6 4.33Z"/>'
      }, props)
  };
  export default CgPlayButton;