import { renderIcon } from "../index";
  export function VsTerminal(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 24 24"},
        c: '<path fill-rule="evenodd" d="M3 1.5 1.5 3v18L3 22.5h18l1.5-1.5V3L21 1.5H3zM3 21V3h18v18H3zm5.656-4.01 1.038 1.061 5.26-5.243v-.912l-5.26-5.26-1.035 1.06 4.59 4.702-4.593 4.592z" clip-rule="evenodd"/>'
      }, props)
  };
  export default VsTerminal;