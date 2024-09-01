import { renderIcon } from "../index";
  export function VsRecordSmall(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>'
      }, props)
  };
  export default VsRecordSmall;