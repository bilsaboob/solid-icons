import { renderIcon } from "../index";
  export function CgFormatHeading(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M6 19V5h2v6h8V5h2v14h-2v-6H8v6H6Z"/>'
      }, props)
  };
  export default CgFormatHeading;