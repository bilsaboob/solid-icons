import { renderIcon } from "../index";
  export function FiGitCommit(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 8A4 4 0 1 0 12 16 4 4 0 1 0 12 8z"/><path d="M1.05 12 7 12"/><path d="M17.01 12 22.96 12"/>'
      }, props)
  };
  export default FiGitCommit;