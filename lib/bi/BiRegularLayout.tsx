import { renderIcon } from "../index";
  export function BiRegularLayout(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z"/>'
      }, props)
  };
  export default BiRegularLayout;