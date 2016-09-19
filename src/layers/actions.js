/**
 * Created by josh on 16/9/13.
 */
import Types from './types'
import Options from './modules/_options'
import Order from './modules/_order'


let actionHttp = {},
    Behaviors = {},
    Provides = {}

let config = [Options, Order];

config.forEach((m)=>{
    Object.assign(Behaviors, m.behaviors);
    Object.assign(Provides, m.provides);
})


for(var type in Types){
    let _type = type;

    if(!Provides[_type]) {
        continue;
    }

    actionHttp[_type] = (data) => {
        let provide = Object.assign({}, Provides[_type], {
            params:data
        })
        return Behaviors[_type](provide);
    }
}

export default actionHttp