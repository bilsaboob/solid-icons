import { renderIcon } from "../index";
  export function VsSplitHorizontal(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zM8 13H3V2h5v11zm6 0H9V2h5v11z"/>'
      }, props)
  };
  export default VsSplitHorizontal;