import { renderIcon } from "../index";
  export function CgShapeHexagon(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="m6 15.235 6 3.333 6-3.333v-6.47l-6-3.333-6 3.333v6.47ZM12 2 3 7v10l9 5 9-5V7l-9-5Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShapeHexagon;