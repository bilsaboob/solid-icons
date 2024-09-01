import { renderIcon } from "../index";
  export function BsAlignTop(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/><path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>'
      }, props)
  };
  export default BsAlignTop;