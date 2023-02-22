// import TSpace from "./index.vue";

// TSpace.install = (app) => {
//     app.component(TSpace.name, TSpace);
// }

// export default TSpace;

import type { App } from 'vue'
import TSpace from './src/demo.vue'

TSpace.install = (app: App) => {
  app.component(TSpace.name, TSpace)
}

export { TSpace }
