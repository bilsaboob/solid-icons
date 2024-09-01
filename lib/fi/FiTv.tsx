import { renderIcon } from "../index";
  export function FiTv(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><path d="M17 2 12 7 7 2"/>'
      }, props)
  };
  export default FiTv;