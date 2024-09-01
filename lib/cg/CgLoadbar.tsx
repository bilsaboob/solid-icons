import { renderIcon } from "../index";
  export function CgLoadbar(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<rect width="18" height="4" x="3" y="10" fill="currentColor" rx="2"/>'
      }, props)
  };
  export default CgLoadbar;