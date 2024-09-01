import { renderIcon } from "../index";
  export function ImStatsBars(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 13h16v2H0zm2-4h2v3H2zm3-4h2v7H5zm3 3h2v4H8zm3-6h2v10h-2z"/>'
      }, props)
  };
  export default ImStatsBars;