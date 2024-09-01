import { renderIcon } from "../index";
  export function CgPathFront(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4h4v10H9v-4H5V5Zm6 6v6h6v-6h-6Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPathFront;