import { renderIcon } from "../index";
  export function TbOval(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-oval","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-6 0a6 9 0 1 0 12 0a6 9 0 1 0 -12 0"/>'
      }, props)
  };
  export default TbOval;