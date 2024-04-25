(function () {
    'use strict';

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Banner = void 0;
    const ids_1 = require("./models/ids");
    const options_1 = require("./models/options");
    class Banner {
        constructor(options) {
            this.bannerElement = undefined;
            const defaultOptions = new options_1.Options();
            options = !options ? defaultOptions : (0, options_1.mergeOptions)(defaultOptions, options);
            this.options = options;
        }
        createBanner() {
            this.bannerElement = document.createElement("div");
            this.bannerElement.id = ids_1.ids.banner;
            this.bannerElement.className = ids_1.classes.banner;
            this.bannerElement.innerHTML = `
      <div id="${ids_1.ids.title}" class="${ids_1.classes.title}">${this.options.data.title}</div>
      <div id="${ids_1.ids.text}" class="${ids_1.classes.text}">${this.options.data.text}</div>
      <div class="${ids_1.classes.btnsContainer}">
        <button type="button" id="${ids_1.ids.acceptBtn}" class="${ids_1.classes.acceptBtn}">
          ${this.options.data.acceptBtnText}
        </button>
        <button type="button" id="${ids_1.ids.rejectBtn}" class="${ids_1.classes.rejectBtn}">
          ${this.options.data.rejectBtnText}
        </button>
      </div>
    `;
            document.body.appendChild(this.bannerElement);
            var style = document.createElement("style");
            style.innerHTML = this.options.styles.banner.getCss(ids_1.classes.banner) +
                this.options.styles.title.getCss(ids_1.classes.title) +
                this.options.styles.text.getCss(ids_1.classes.text) +
                this.options.styles.btnsContainer.getCss(ids_1.classes.btnsContainer) +
                this.options.styles.acceptBtn.getCss(ids_1.classes.acceptBtn) +
                this.options.styles.rejectBtn.getCss(ids_1.classes.rejectBtn);
            document.head.appendChild(style);
            document.getElementById(ids_1.ids.acceptBtn).addEventListener('click', () => this.acceptCookies());
            document.getElementById(ids_1.ids.rejectBtn).addEventListener('click', () => this.rejectCookies());
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
    exports.Banner = Banner;

})();
