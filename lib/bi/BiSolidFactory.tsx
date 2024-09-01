import { renderIcon } from "../index";
  export function BiSolidFactory(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M17 10V6l-5 4V6l-5 4V4H2v16h20V6l-5 4zm-8 7H7v-3h2v3zm5 0h-2v-3h2v3zm5 0h-2v-3h2v3z"/>'
      }, props)
  };
  export default BiSolidFactory;