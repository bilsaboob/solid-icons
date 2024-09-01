import { renderIcon } from "../index";
  export function BiRegularBody(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M12 2A2 2 0 1 0 12 6 2 2 0 1 0 12 2z"/><path d="M15 22V9h5V7H4v2h5v13h2v-7h2v7z"/>'
      }, props)
  };
  export default BiRegularBody;