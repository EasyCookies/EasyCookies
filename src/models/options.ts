import { Data } from "./data";
import { Scripts } from "./scripts";
import { Style, Styles } from "./styles";

export class Options {
  scripts: Scripts = new Scripts()
  data: Data = new Data()
  styles: Styles = new Styles()
}

export function mergeOptions(defaultOptions: Options, customOptions: any): Options {
  const mergedOptions = new Options();

  // Merge Scripts
  mergedOptions.scripts = {
    ...defaultOptions.scripts,
    ...customOptions.scripts
  };

  // Merge Data
  mergedOptions.data = {
    ...defaultOptions.data,
    ...customOptions.data
  };

  // Merge Styles
  if (customOptions.styles != undefined)
    mergedOptions.styles = {
      ...defaultOptions.styles,
      banner: customOptions.styles.banner != undefined ? mergeStyles(defaultOptions.styles.banner, customOptions.styles.banner) : defaultOptions.styles.banner,
      acceptBtn: customOptions.styles.acceptBtn != undefined ? mergeStyles(defaultOptions.styles.acceptBtn, customOptions.styles.acceptBtn) : defaultOptions.styles.acceptBtn,
      rejectBtn: customOptions.styles.rejectBtn != undefined ? mergeStyles(defaultOptions.styles.rejectBtn, customOptions.styles.rejectBtn) : defaultOptions.styles.rejectBtn,
    };
  else
    mergedOptions.styles = defaultOptions.styles

  return mergedOptions;
}

function mergeStyles<T extends Style>(defaultStyle: T, customStyle: any): any {
  const mergedStyle = new (defaultStyle.constructor as { new(): T })(); // Dynamically create the correct type

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