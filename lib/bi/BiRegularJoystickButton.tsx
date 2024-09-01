import { renderIcon } from "../index";
  export function BiRegularJoystickButton(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 24 24"},
        c: '<path d="M20 7h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v3H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-3h3c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm0 8h-5v4h.001v1H9v-5H4V9h5V4h6v5h5v6z"/><path d="M8 14v-4l-3 2zm8 0 3-2-3-2zm-6-6h4l-2-3zm2 11 2-3h-4z"/><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10z"/>'
      }, props)
  };
  export default BiRegularJoystickButton;