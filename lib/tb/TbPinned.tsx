import { renderIcon } from "../index";
  export function TbPinned(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-pinned","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6"/><path d="M12 16l0 5"/><path d="M8 4l8 0"/>'
      }, props)
  };
  export default TbPinned;