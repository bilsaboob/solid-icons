import { renderIcon } from "../index";
  export function FiUmbrella(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>'
      }, props)
  };
  export default FiUmbrella;