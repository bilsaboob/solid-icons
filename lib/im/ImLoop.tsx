import { renderIcon } from "../index";
  export function ImLoop(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M2 5h10v3l4-4-4-4v3H0v6h2zm12 6H4V8l-4 4 4 4v-3h12V7h-2z"/>'
      }, props)
  };
  export default ImLoop;