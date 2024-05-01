export class Style {

  propsToCss(obj: Object, className: string): string {
    const ownProps = Object.keys(obj)
    const allProps = Object.getOwnPropertyNames(obj)
    let res = ""
    for (const prop of ownProps) {
      if (allProps.indexOf(prop) < 0)
        continue // Skip if not present in the prototype chain
      let val = obj[prop]
      if (typeof val === "string") {
        //convert to CSS property name
        let cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
        res += `${cssProp}: ${val}; `
      }
    }
    return `.${className} { ${res}} `;
  }

  getCss(className: string): string {
    let res = this.propsToCss(this, className)
    if (this["hover"] != undefined) {
      res += this.propsToCss(this["hover"], className + ":hover")
    }
    return res
  }
}

export class BannerStyle extends Style {
  zIndex: string | undefined = "9999"
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
  fontSize: string | undefined = "18px"
  paddingBottom: string | undefined = "8px"
}

export class TextStyle extends Style {
  paddingBottom: string | undefined = "16px"
  fontSize: string | undefined = "14px"
}

export class btnsContainerStyle extends Style {
  display: string | undefined = "flex"
  flexDirection: string | undefined = "row"
  justifyContent: string | undefined = "end"
  gap: string | undefined = "16px"
}

export class BtnStyle extends Style {
  fontSize: string | undefined = "14px"
  color: string | undefined = "#263238"
  backgroundColor: string | undefined = "white"
  padding: string | undefined = "10px 20px"
  borderRadius: string | undefined = "8px"
  border: string | undefined = "1px solid #cfd8dc"
  cursor: string | undefined = "pointer"
}

export class AcceptBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "#B3E5FC"
  hover = {
    backgroundColor: "#81D4FA"
  }
}

export class RejectBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "#FAFAFA"
  hover = {
    backgroundColor: "#F5F5F5"
  }
}

export class Styles {
  banner: BannerStyle | undefined = new BannerStyle()
  text: TextStyle | undefined = new TextStyle()
  title: TitleStyle | undefined = new TitleStyle()
  btnsContainer: btnsContainerStyle | undefined = new btnsContainerStyle()
  acceptBtn: AcceptBtnStyle | undefined = new AcceptBtnStyle()
  rejectBtn: RejectBtnStyle | undefined = new RejectBtnStyle()
}
