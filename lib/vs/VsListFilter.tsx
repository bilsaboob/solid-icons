import { renderIcon } from "../index";
  export function VsListFilter(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M6 12v-1h4v1H6zM4 7h8v1H4V7zm10-4v1H2V3h12z"/>'
      }, props)
  };
  export default VsListFilter;