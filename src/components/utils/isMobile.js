
export default(config) => {
    let Config = config || function(){}
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
        if (!document.hidden) {

            let rect = body.getBoundingClientRect()

            Config(rect.width - RATIO < WIDTH);
        }
    }

   // return _is

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
}
