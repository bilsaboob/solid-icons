import { renderIcon } from "../index";
  export function ImDisplay(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="M0 1v10h16V1H0zm15 9H1V2h14v8zm-4.5 2h-5L5 14l-1 1h8l-1-1z"/>'
      }, props)
  };
  export default ImDisplay;