import { renderIcon } from "../index";
  export function FiVoicemail(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M5.5 7A4.5 4.5 0 1 0 5.5 16 4.5 4.5 0 1 0 5.5 7z"/><path d="M18.5 7A4.5 4.5 0 1 0 18.5 16 4.5 4.5 0 1 0 18.5 7z"/><path d="M5.5 16 18.5 16"/>'
      }, props)
  };
  export default FiVoicemail;