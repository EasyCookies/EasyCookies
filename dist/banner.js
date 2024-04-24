export class Banner {
    constructor() {
        this.bannerElement = undefined;
        this.options = undefined;
    }
    createBanner() {
        this.bannerElement = document.createElement("div");
        this.bannerElement.innerHTML = `
    <div id="easy-cookies-banner">
      <h4>${this.options.data.title}</h3>
      <p>${this.options.data.text}</p>
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
        document.getElementById('easy-cookies-accept-btn').addEventListener('click', () => this.acceptCookies());
        document.getElementById('easy-cookies-reject-btn').addEventListener('click', () => this.rejectCookies());
    }
    checkStatus() {
    }
    acceptCookies() {
    }
    rejectCookies() {
    }
    init(options) {
        if (!options)
            options = {
                data: {
                    title: '',
                    text: '',
                }
            };
        this.options = options;
        // Draw banner
        window.addEventListener('load', () => {
            this.createBanner();
            this.checkStatus();
        });
    }
}
//# sourceMappingURL=banner.js.map