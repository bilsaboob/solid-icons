import { renderIcon } from "../index";
  export function FiCreditCard(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10 23 10"/>'
      }, props)
  };
  export default FiCreditCard;