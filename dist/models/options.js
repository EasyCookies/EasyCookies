import { Data } from "./data";
import { Scripts } from "./scripts";
import { Styles } from "./styles";
export class Options {
    constructor() {
        this.scripts = new Scripts();
        this.data = new Data();
        this.styles = new Styles();
    }
}
export function mergeOptions(defaultOptions, customOptions) {
    const mergedOptions = new Options();
    // Merge Scripts
    mergedOptions.scripts = Object.assign(Object.assign({}, defaultOptions.scripts), customOptions.scripts);
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
//# sourceMappingURL=options.js.map