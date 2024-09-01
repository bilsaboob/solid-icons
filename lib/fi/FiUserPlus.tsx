import { renderIcon } from "../index";
  export function FiUserPlus(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M8.5 3A4 4 0 1 0 8.5 11 4 4 0 1 0 8.5 3z"/><path d="M20 8 20 14"/><path d="M23 11 17 11"/>'
      }, props)
  };
  export default FiUserPlus;