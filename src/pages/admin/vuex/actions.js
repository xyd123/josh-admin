import types from './mutation-types'

import {actionSideMune} from './actions/a_sidemune'
import { actionSideMuneOpened } from './actions/a_sideconfig'

// TODO: 采用Default导出方式导出对象，该对象在import声明中将直接被分配给某个引用 (单个函数) import d from './module1.js';
// TODO: 采用export导出方式导出对象 (多个函数) import {Employee, getEmployee} from './module1.js';
export {
    actionSideMune,
    actionSideMuneOpened
}


