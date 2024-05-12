import { createSSRApp } from 'vue'
import App from './Contact.vue'
//
export function ContactCreateApp() {
  const app = createSSRApp(App)
  return { app }
}
