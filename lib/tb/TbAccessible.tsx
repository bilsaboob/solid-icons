import { renderIcon } from "../index";
  export function TbAccessible(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-accessible","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"/><circle cx="12" cy="7.5" r=".5" fill="currentColor"/>'
      }, props)
  };
  export default TbAccessible;