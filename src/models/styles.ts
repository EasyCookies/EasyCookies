export class Style {

  propsToCss(obj: Object, className: string): string {
    const ownProps = Object.keys(obj)
    const allProps = Object.getOwnPropertyNames(obj)
    let res = ""
    for (const prop of ownProps) {
      if (allProps.indexOf(prop) < 0)
        continue // Skip if not present in the prototype chain
      let val = this[prop]
      if (typeof val === "string")
        res += `${this.camelCaseToHyphen(prop)}: ${val}; `
    }
    return `.${className} { ${res}} `;
  }

  getCss(className: string): string {
    let res = this.propsToCss(this, className)
    if(this["hover"] != undefined){
      res += this.propsToCss(this["hover"], className + ": hover")
    }
    return res;
  }

  camelCaseToHyphen(propertyName: string): string {
    return propertyName.replace(/([A-Z])/g, '-$1').toLowerCase()
  }
}

export class BannerStyle extends Style {
  color: string | undefined = "#263238"
  backgroundColor: string | undefined = "white"
  border: string | undefined = "1px solid #cfd8dc"
  borderRadius: string | undefined = "16px"
  position: string | undefined = "fixed"
  bottom: string | undefined = "0"
  right: string | undefined = "0"
  margin: string | undefined = "16px"
  padding: string | undefined = "16px"
  maxWidth: string | undefined = "420px"
}

export class TitleStyle extends Style {
  fontWeight: string | undefined = "bold"
}

export class TextStyle extends Style {
  padding: string | undefined = "16px 0px"
}

export class btnsContainerStyle extends Style {
  display: string | undefined = "flex"
  flexDirection: string | undefined = "row"
  justifyContent: string | undefined = "end"
  gap: string | undefined = "16px"
}

export class BtnStyle extends Style {
  color: string | undefined = "#263238"
  backgroundColor: string | undefined = "white"
  padding: string | undefined = "10px 20px"
  borderRadius: string | undefined = "8px"
  borderColor: string | undefined = "transparent"
  cursor: string | undefined = "pointer"
  hover: {
    opacity: "0.8"
  }
}

export class AcceptBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "green"
}

export class RejectBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "red"
}

export class Styles {
  banner: BannerStyle | undefined = new BannerStyle()
  text: TextStyle | undefined = new TextStyle()
  title: TitleStyle | undefined = new TitleStyle()
  btnsContainer: btnsContainerStyle | undefined = new btnsContainerStyle()
  acceptBtn: AcceptBtnStyle | undefined = new AcceptBtnStyle()
  rejectBtn: RejectBtnStyle | undefined = new RejectBtnStyle()
}
