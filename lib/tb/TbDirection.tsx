import { renderIcon } from "../index";
  export function TbDirection(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-direction","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 10l3 -3l3 3"/><path d="M9 14l3 3l3 -3"/>'
      }, props)
  };
  export default TbDirection;