// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
//export const getLeave = state => state.leave

//** sidemune
export const getSideMune = state => {
    return state.sideMune.data
}

export const getSideMuneOpended = state => {
    return state.sideConfig
}