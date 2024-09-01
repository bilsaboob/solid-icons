import { renderIcon } from "../index";
  export function BiRegularDetail(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"/><path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"/>'
      }, props)
  };
  export default BiRegularDetail;