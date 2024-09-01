import { renderIcon } from "../index";
  export function CgPathBack(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M9 14H4V4h10v5h5v10H9v-5ZM6 6h6v6H6V6Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPathBack;