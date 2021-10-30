import {App} from 'vue'
import OneIcon from './main.vue'

function loadJS(url: string) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}

export {OneIcon}

export default {
    installed: false,
    install(vue: App, options?: { href: '' }): void {
        if (this.installed) {
            return
        }
        this.installed = true
        if (options && options.href) {
            loadJS(options.href)
        }
        vue.component('one-icon', OneIcon)
    }
}
