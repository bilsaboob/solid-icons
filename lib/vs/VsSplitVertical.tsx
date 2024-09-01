import { renderIcon } from "../index";
  export function VsSplitVertical(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z"/>'
      }, props)
  };
  export default VsSplitVertical;