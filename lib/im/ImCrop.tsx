import { renderIcon } from "../index";
  export function ImCrop(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m13 4 3-3-1-1-3 3H5V0H3v3H0v2h3v8h8v3h2v-3h3v-2h-3V4zM5 5h5l-5 5V5zm1 6 5-5v5H6z"/>'
      }, props)
  };
  export default ImCrop;