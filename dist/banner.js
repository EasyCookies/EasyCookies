import { classes, ids } from "./models/ids";
import { Options, mergeOptions } from "./models/options";
let gtag;
export class Banner {
    constructor(options) {
        this.bannerElement = undefined;
        const defaultOptions = new Options();
        options = !options ? defaultOptions : mergeOptions(defaultOptions, options);
        this.options = options;
    }
    hide() {
        this.bannerElement.style.display = "none";
    }
    show() {
        this.bannerElement.style.display = "block";
    }
    create() {
        this.bannerElement = document.createElement("div");
        this.hide();
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
                this.hide();
                break;
            case "0":
                this.hide();
                break;
            default:
                this.show();
        }
    }
    acceptCookies() {
        localStorage.setItem("EasyCookies", "1");
        this.gtagConsentGranted();
        this.hide();
    }
    rejectCookies() {
        localStorage.setItem("EasyCookies", "0");
        this.gtagConsentDenied();
        this.hide();
    }
    gtagAdd() {
        const gtagId = this.options.scripts.gtag;
        if (gtagId !== undefined && gtagId !== "") {
            let gTag = document.createElement("script");
            gTag.async = true;
            gTag.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
            document.head.appendChild(gTag);
            let gTagData = document.createElement("script");
            gTagData.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
      gtag('js', new Date());
      gtag('config', '${gtagId}');`;
            document.head.appendChild(gTagData);
        }
    }
    gtagConsentGranted() {
        const gtagId = this.options.scripts.gtag;
        if (gtagId !== undefined && gtagId !== "") {
            gtag('consent', 'update', {
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }
    gtagConsentDenied() {
        const gtagId = this.options.scripts.gtag;
        if (gtagId !== undefined && gtagId !== "") {
            gtag('consent', 'update', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        }
    }
    init() {
        window.addEventListener('load', () => {
            this.create();
            this.gtagAdd();
            this.checkStatus();
        });
    }
}
//# sourceMappingURL=banner.js.map