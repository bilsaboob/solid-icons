import { renderIcon } from "../index";
  export function VsListSelection(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"/>'
      }, props)
  };
  export default VsListSelection;