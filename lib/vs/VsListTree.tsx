import { renderIcon } from "../index";
  export function VsListTree(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M4 9H13V10H4z"/><path d="M4 12H11V13H4z"/><path d="M4 6H14V7H4z"/><path d="M1 3H12V4H1z"/><path d="M4 4H5V13H4z"/>'
      }, props)
  };
  export default VsListTree;