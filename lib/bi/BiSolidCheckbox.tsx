import { renderIcon } from "../index";
  export function BiSolidCheckbox(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>'
      }, props)
  };
  export default BiSolidCheckbox;