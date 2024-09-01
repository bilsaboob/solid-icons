import { renderIcon } from "../index";
  export function FiGitBranch(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M6 3 6 15"/><path d="M18 3A3 3 0 1 0 18 9 3 3 0 1 0 18 3z"/><path d="M6 15A3 3 0 1 0 6 21 3 3 0 1 0 6 15z"/><path d="M18 9a9 9 0 0 1-9 9"/>'
      }, props)
  };
  export default FiGitBranch;