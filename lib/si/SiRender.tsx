import { renderIcon } from "../index";
  export function SiRender(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M13.586 0v3.172H7.523a4.528 4.528 0 0 0-3.018 1.305 4.498 4.498 0 0 0-1.333 2.99v11.326H0V7.509a7.472 7.472 0 0 1 2.204-5.305A7.471 7.471 0 0 1 4.588.589 7.432 7.432 0 0 1 7.51 0Zm5.207 0v3.158H15.62V0ZM24 0v3.158h-3.172V0Zm0 5.207v3.172h-3.172V5.207Zm0 5.207v3.172h-3.172v-3.172Zm0 5.207v3.172h-3.172V15.62Zm0 5.207V24h-3.172v-3.172Zm-5.207 0V24H15.62v-3.172Zm-5.207 0V24h-3.172v-3.172Zm-5.207 0V24H5.207v-3.172Zm-5.221 0V24H0v-3.172Z"/>'
      }, props)
  };
  export default SiRender;