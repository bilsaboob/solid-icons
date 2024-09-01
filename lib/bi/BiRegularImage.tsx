import { renderIcon } from "../index";
  export function BiRegularImage(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M7.499 8A1.5 1.5 0 1 0 7.499 11 1.5 1.5 0 1 0 7.499 8z"/><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"/><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"/>'
      }, props)
  };
  export default BiRegularImage;