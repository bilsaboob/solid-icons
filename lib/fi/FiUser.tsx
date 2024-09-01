import { renderIcon } from "../index";
  export function FiUser(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><path d="M12 3A4 4 0 1 0 12 11 4 4 0 1 0 12 3z"/>'
      }, props)
  };
  export default FiUser;