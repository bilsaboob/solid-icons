import { renderIcon } from "../index";
  export function ImImage(props:any) {
      return renderIcon({
        a: {"viewBox":"0 0 16 16"},
        c: '<path fill="currentColor" d="m14.998 2 .002.002v11.996l-.002.002H1.002L1 13.998V2.002L1.002 2h13.996zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"/><path fill="currentColor" d="M13 4.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13 4.5zM14 13H2v-2l3.5-6 4 5h1L14 7z"/>'
      }, props)
  };
  export default ImImage;