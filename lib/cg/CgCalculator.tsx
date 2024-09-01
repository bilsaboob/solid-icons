import { renderIcon } from "../index";
  export function CgCalculator(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M17 5H7v2h10V5ZM7 9h2v2H7V9ZM9 13H7v2h2v-2ZM7 17h2v2H7v-2ZM13 9h-2v2h2V9ZM11 13h2v2h-2v-2ZM13 17h-2v2h2v-2ZM15 9h2v2h-2V9ZM17 13h-2v6h2v-6Z"/><path fill="currentColor" fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Zm2 0h14v18H5V3Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgCalculator;