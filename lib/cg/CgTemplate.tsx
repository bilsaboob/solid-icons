import { renderIcon } from "../index";
  export function CgTemplate(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M3 3v6h18V3H3Zm16 2H5v2h14V5ZM3 11v10h8V11H3Zm6 2H5v6h4v-6Z" clip-rule="evenodd"/><path fill="currentColor" d="M21 11h-8v2h8v-2ZM13 15h8v2h-8v-2ZM21 19h-8v2h8v-2Z"/>'
      }, props)
  };
  export default CgTemplate;