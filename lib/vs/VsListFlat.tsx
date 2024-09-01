import { renderIcon } from "../index";
  export function VsListFlat(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M2 9H11V10H2z"/><path d="M2 12H10V13H2z"/><path d="M2 6H14V7H2z"/><path d="M2 3H13V4H2z"/>'
      }, props)
  };
  export default VsListFlat;