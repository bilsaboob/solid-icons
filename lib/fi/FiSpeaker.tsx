import { renderIcon } from "../index";
  export function FiSpeaker(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 10A4 4 0 1 0 12 18 4 4 0 1 0 12 10z"/><path d="M12 6 12.01 6"/>'
      }, props)
  };
  export default FiSpeaker;