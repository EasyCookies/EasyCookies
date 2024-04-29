import { classes, ids } from "./models/ids";
import { Options, mergeOptions } from "./models/options";
export class Banner {
    constructor(options) {
        this.bannerElement = undefined;
        const defaultOptions = new Options();
        options = !options ? defaultOptions : mergeOptions(defaultOptions, options);
        this.options = options;
    }
    hideBanner() {
        this.bannerElement.style.display = "none";
    }
    showBanner() {
        this.bannerElement.style.display = "block";
    }
    createBanner() {
        this.bannerElement = document.createElement("div");
        this.hideBanner();
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
        switch (localStorage.getItem("EasyCookies")) {
            case "1":
                this.hideBanner();
                break;
            case "0":
                this.showBanner();
                break;
            default:
                this.showBanner();
        }
    }
    acceptCookies() {
        localStorage.setItem("EasyCookies", "1");
        this.addTrackingScripts();
        this.hideBanner();
    }
    rejectCookies() {
        localStorage.setItem("EasyCookies", "0");
        this.removeTrackingScripts();
        this.hideBanner();
    }
    addTrackingScripts() {
        const gtag = this.options.scripts.gTag;
        if (gtag !== undefined && gtag !== "") {
            let gTagScript1 = document.createElement("script");
            gTagScript1.async = true;
            gTagScript1.src = `https://www.googletagmanager.com/gtag/js?id=${gtag}`;
            document.head.appendChild(gTagScript1);
            let gTagScript2 = document.createElement("script");
            gTagScript2.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtag}');`;
            document.head.appendChild(gTagScript2);
        }
    }
    removeTrackingScripts() {
    }
    init() {
        window.addEventListener('load', () => {
            this.createBanner();
            this.checkStatus();
        });
    }
}
//# sourceMappingURL=banner.js.map