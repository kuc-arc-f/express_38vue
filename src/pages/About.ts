import { createSSRApp } from 'vue'
import App from './About.vue'
//
export function AboutCreateApp() {
  const app = createSSRApp(App)
  return { app }
}
