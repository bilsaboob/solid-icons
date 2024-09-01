import { renderIcon } from "../index";
  export function IoInvertMode(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 512 512"},
        c: '<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48A208 208 0 1 0 256 464 208 208 0 1 0 256 48z"/><path d="M256 176v160a80 80 0 0 0 0-160ZM256 48v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48Z"/>'
      }, props)
  };
  export default IoInvertMode;