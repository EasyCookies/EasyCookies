import { classes, ids } from "./models/ids";
import { Options, mergeOptions } from "./models/options";
export class Banner {
    constructor(options) {
        this.bannerElement = undefined;
        const defaultOptions = new Options();
        options = !options ? defaultOptions : mergeOptions(defaultOptions, options);
        this.options = options;
    }
    createBanner() {
        this.bannerElement = document.createElement("div");
        this.bannerElement.id = ids.banner;
        this.bannerElement.className = classes.banner;
        this.bannerElement.innerHTML = `
      <div id="${ids.title}" class="${classes.title}">${this.options.data.title}</div>
      <div id="${ids.text}" class="${classes.text}">${this.options.data.text}</div>
      <div class="${classes.btnsContainer}">
        <button type="button" id="${ids.acceptBtn}" class="${classes.acceptBtn}">
          ${this.options.data.acceptBtnText}
        </button>
        <button type="button" id="${ids.rejectBtn}" class="${classes.rejectBtn}">
          ${this.options.data.rejectBtnText}
        </button>
      </div>
    `;
        document.body.appendChild(this.bannerElement);
        var style = document.createElement("style");
        style.innerHTML = this.options.styles.banner.getCss(classes.banner) +
            this.options.styles.title.getCss(classes.title) +
            this.options.styles.text.getCss(classes.text) +
            this.options.styles.btnsContainer.getCss(classes.btnsContainer) +
            this.options.styles.acceptBtn.getCss(classes.acceptBtn) +
            this.options.styles.rejectBtn.getCss(classes.rejectBtn);
        document.head.appendChild(style);
        document.getElementById(ids.acceptBtn).addEventListener('click', () => this.acceptCookies());
        document.getElementById(ids.rejectBtn).addEventListener('click', () => this.rejectCookies());
    }
    checkStatus() {
    }
    acceptCookies() {
    }
    rejectCookies() {
    }
    init() {
        window.addEventListener('load', () => {
            this.createBanner();
            this.checkStatus();
        });
    }
}
//# sourceMappingURL=banner.js.map