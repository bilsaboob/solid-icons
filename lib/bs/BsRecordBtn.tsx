import { renderIcon } from "../index";
  export function BsRecordBtn(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>'
      }, props)
  };
  export default BsRecordBtn;