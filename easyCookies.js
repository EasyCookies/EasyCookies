var EasyCookies = (function (exports) {
    'use strict';

    const classes = {
        banner: "easy-cookies-banner",
        btnsContainer: "easy-cookies-btns-container",
        title: "easy-cookies-title",
        text: "easy-cookies-text",
        acceptBtn: "easy-cookies-accept-btn",
        rejectBtn: "easy-cookies-reject-btn",
    };
    const ids = {
        banner: classes.banner + "-id",
        title: classes.title + "-id",
        text: classes.text + "-id",
        btnsContainer: classes.btnsContainer + "-id",
        acceptBtn: classes.acceptBtn + "-id",
        rejectBtn: classes.rejectBtn + "-id",
    };

    class Data {
        constructor() {
            this.title = "A quick note about cookies 🍪";
            this.text = "This website uses a few cookies to make things run smoothly";
            this.acceptBtnText = "Accept";
            this.rejectBtnText = "Reject";
        }
    }

    class Style {
        propsToCss(obj, className) {
            const ownProps = Object.keys(obj);
            const allProps = Object.getOwnPropertyNames(obj);
            let res = "";
            for (const prop of ownProps) {
                if (allProps.indexOf(prop) < 0)
                    continue; // Skip if not present in the prototype chain
                let val = obj[prop];
                if (typeof val === "string") {
                    //convert to CSS property name
                    let cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
                    res += `${cssProp}: ${val}; `;
                }
            }
            return `.${className} { ${res}} `;
        }
        getCss(className) {
            let res = this.propsToCss(this, className);
            if (this["hover"] != undefined) {
                res += this.propsToCss(this["hover"], className + ":hover");
            }
            return res;
        }
    }
    class BannerStyle extends Style {
        constructor() {
            super(...arguments);
            this.color = "#263238";
            this.backgroundColor = "white";
            this.border = "1px solid #cfd8dc";
            this.borderRadius = "16px";
            this.position = "fixed";
            this.bottom = "0";
            this.right = "0";
            this.margin = "16px";
            this.padding = "16px";
            this.maxWidth = "420px";
        }
    }
    class TitleStyle extends Style {
        constructor() {
            super(...arguments);
            this.fontWeight = "bold";
            this.fontSize = "18px";
            this.paddingBottom = "8px";
        }
    }
    class TextStyle extends Style {
        constructor() {
            super(...arguments);
            this.paddingBottom = "16px";
            this.fontSize = "14px";
        }
    }
    class btnsContainerStyle extends Style {
        constructor() {
            super(...arguments);
            this.display = "flex";
            this.flexDirection = "row";
            this.justifyContent = "end";
            this.gap = "16px";
        }
    }
    class BtnStyle extends Style {
        constructor() {
            super(...arguments);
            this.fontSize = "14px";
            this.color = "#263238";
            this.backgroundColor = "white";
            this.padding = "10px 20px";
            this.borderRadius = "8px";
            this.border = "1px solid #cfd8dc";
            this.cursor = "pointer";
        }
    }
    class AcceptBtnStyle extends BtnStyle {
        constructor() {
            super(...arguments);
            this.backgroundColor = "#B3E5FC";
            this.hover = {
                backgroundColor: "#81D4FA"
            };
        }
    }
    class RejectBtnStyle extends BtnStyle {
        constructor() {
            super(...arguments);
            this.backgroundColor = "#FAFAFA";
            this.hover = {
                backgroundColor: "#F5F5F5"
            };
        }
    }
    class Styles {
        constructor() {
            this.banner = new BannerStyle();
            this.text = new TextStyle();
            this.title = new TitleStyle();
            this.btnsContainer = new btnsContainerStyle();
            this.acceptBtn = new AcceptBtnStyle();
            this.rejectBtn = new RejectBtnStyle();
        }
    }

    class Options {
        constructor() {
            this.data = new Data();
            this.styles = new Styles();
        }
    }
    function mergeOptions(defaultOptions, customOptions) {
        const mergedOptions = new Options();
        // Merge Data
        mergedOptions.data = Object.assign(Object.assign({}, defaultOptions.data), customOptions.data);
        // Merge Styles
        if (customOptions.styles != undefined)
            mergedOptions.styles = Object.assign(Object.assign({}, defaultOptions.styles), { banner: customOptions.styles.banner != undefined ? mergeStyles(defaultOptions.styles.banner, customOptions.styles.banner) : defaultOptions.styles.banner, acceptBtn: customOptions.styles.acceptBtn != undefined ? mergeStyles(defaultOptions.styles.acceptBtn, customOptions.styles.acceptBtn) : defaultOptions.styles.acceptBtn, rejectBtn: customOptions.styles.rejectBtn != undefined ? mergeStyles(defaultOptions.styles.rejectBtn, customOptions.styles.rejectBtn) : defaultOptions.styles.rejectBtn });
        else
            mergedOptions.styles = defaultOptions.styles;
        return mergedOptions;
    }
    function mergeStyles(defaultStyle, customStyle) {
        const mergedStyle = new defaultStyle.constructor(); // Dynamically create the correct type
        for (const prop in defaultStyle) {
            mergedStyle[prop] = customStyle[prop] !== undefined ? customStyle[prop] : defaultStyle[prop];
        }
        //Add any other props from custom style
        for (const prop in customStyle) {
            if (mergedStyle[prop] == undefined)
                mergedStyle[prop] = customStyle[prop];
        }
        return mergedStyle;
    }

    class Banner {
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

    exports.Banner = Banner;

    return exports;

})({});
