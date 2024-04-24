define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function f() {
    }
    exports.default = f;
});
define("easyCookies", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EasyCookies {
        constructor() {
            this.bannerElement = undefined;
            this.bannerData = undefined;
            this.options = undefined;
        }
        createBanner() {
            this.bannerElement = document.createElement("div");
            this.bannerElement.innerHTML = `
    <div id="easy-cookies-banner">
      <h4>${this.bannerData.title}</h3>
      <p>${this.bannerData.text}</p>
      <div>
        <button type="button" id="easy-cookies-accept-btn">
          Accept
        </button>
        <button type="button" id="easy-cookies-reject-btn">
          Reject
        </button>
      </div>
    </div>
    `;
            document.body.appendChild(this.bannerElement);
            document.getElementById('acceptCookies').addEventListener('click', () => this.acceptCookies());
            document.getElementById('rejectCookies').addEventListener('click', () => this.rejectCookies());
        }
        checkStatus() {
        }
        acceptCookies() {
        }
        rejectCookies() {
        }
        init(options) {
            if (!options)
                options = {};
            this.options = options;
            this.bannerData = {};
            // Draw banner
            window.addEventListener('load', () => {
                this.createBanner();
                this.checkStatus();
            });
        }
    }
});
//# sourceMappingURL=easyCookies.js.map