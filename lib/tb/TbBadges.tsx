import { renderIcon } from "../index";
  export function TbBadges(props:any) {
      return renderIcon({
        a: {"xmlns":"http://www.w3.org/2000/svg","class":"icon icon-tabler icon-tabler-badges","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"2","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},
        c: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17v-4l-5 3l-5 -3v4l5 3z"/><path d="M17 8v-4l-5 3l-5 -3v4l5 3z"/>'
      }, props)
  };
  export default TbBadges;