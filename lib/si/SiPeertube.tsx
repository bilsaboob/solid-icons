import { renderIcon } from "../index";
  export function SiPeertube(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545"/>'
      }, props)
  };
  export default SiPeertube;