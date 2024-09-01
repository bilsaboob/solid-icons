import { renderIcon } from "../index";
  export function FiCpu(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><path d="M9 9H15V15H9z"/><path d="M9 1 9 4"/><path d="M15 1 15 4"/><path d="M9 20 9 23"/><path d="M15 20 15 23"/><path d="M20 9 23 9"/><path d="M20 14 23 14"/><path d="M1 9 4 9"/><path d="M1 14 4 14"/>'
      }, props)
  };
  export default FiCpu;