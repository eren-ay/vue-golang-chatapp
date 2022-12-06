import { h } from 'vue'

export default {
    data() {
      return {
        msg: 'hello'
      }
    },
    render(){
        return h('div',{ className:"ChatInput" },[
            <input placeholder="yalannn" />
          ])
    }
}

