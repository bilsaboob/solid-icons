import { renderIcon } from "../index";
  export function CgQuote(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M9.135 9h3L10 14.607H7L9.135 9ZM14.135 9h3L15 14.607h-3L14.135 9Z"/>'
      }, props)
  };
  export default CgQuote;