import { renderIcon } from "../index";
  export function CgShapeRhombus(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M12 6.343 6.343 12 12 17.657 17.657 12 12 6.343ZM2.1 12l9.9 9.9 9.9-9.9L12 2.1 2.1 12Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShapeRhombus;