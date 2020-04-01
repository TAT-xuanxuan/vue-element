import vue from "vue"

import app from "./app"
function upload(propsData) {
  const component = vue.extend(app);
  return new component({
    $el: document.createComment('div'),
    propsData
  })
}

export default upload