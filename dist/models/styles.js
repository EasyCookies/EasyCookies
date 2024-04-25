export class Style {
    getCss(className) {
        const ownProps = Object.keys(this);
        const allProps = Object.getOwnPropertyNames(this);
        let res = "";
        for (const prop of ownProps) {
            if (allProps.indexOf(prop) < 0)
                continue; // Skip if not present in the prototype chain
            let val = this[prop];
            console.log("typeof val: ", typeof val);
            console.log("typeof this: ", typeof this);
            res += `${this.camelCaseToHyphen(prop)}: ${val}; `;
        }
        return `.${className} { ${res}} `;
    }
    camelCaseToHyphen(propertyName) {
        return propertyName.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}
export class BannerStyle extends Style {
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
export class btnsContainerStyle extends Style {
    constructor() {
        super(...arguments);
        this.display = "flex";
        this.flexDirection = "row";
        this.justifyContent = "end";
        this.gap = "16px";
    }
}
export class BtnStyle extends Style {
    constructor() {
        super(...arguments);
        this.color = "#263238";
        this.backgroundColor = "white";
        this.padding = "10px 20px";
        this.borderRadius = "8px";
        this.borderColor = "transparent";
        this.cursor = "pointer";
    }
}
export class AcceptBtnStyle extends BtnStyle {
    constructor() {
        super(...arguments);
        this.backgroundColor = "green";
    }
}
export class RejectBtnStyle extends BtnStyle {
    constructor() {
        super(...arguments);
        this.backgroundColor = "red";
    }
}
export class Styles {
    constructor() {
        this.banner = new BannerStyle();
        this.btnsContainer = new btnsContainerStyle();
        this.acceptBtn = new AcceptBtnStyle();
        this.rejectBtn = new RejectBtnStyle();
    }
}
//# sourceMappingURL=styles.js.map