import { renderIcon } from "../index";
  export function FiGitMerge(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M18 15A3 3 0 1 0 18 21 3 3 0 1 0 18 15z"/><path d="M6 3A3 3 0 1 0 6 9 3 3 0 1 0 6 3z"/><path d="M6 21V9a9 9 0 0 0 9 9"/>'
      }, props)
  };
  export default FiGitMerge;