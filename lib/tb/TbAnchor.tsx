import { renderIcon } from "../index";
  export function TbAnchor(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-anchor","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2"/><path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>'
      }, props)
  };
  export default TbAnchor;