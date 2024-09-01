import { renderIcon } from "../index";
  export function VsBookmark(props:any) {
      return renderIcon({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M12.5 1h-9l-.5.5v13l.872.335L8 10.247l4.128 4.588L13 14.5v-13l-.5-.5zM12 13.2 8.372 9.165h-.744L4 13.2V2h8v11.2z"/>'
      }, props)
  };
  export default VsBookmark;