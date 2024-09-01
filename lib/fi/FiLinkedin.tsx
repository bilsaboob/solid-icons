import { renderIcon } from "../index";
  export function FiLinkedin(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9H6V21H2z"/><path d="M4 2A2 2 0 1 0 4 6 2 2 0 1 0 4 2z"/>'
      }, props)
  };
  export default FiLinkedin;