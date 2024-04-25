export class Style {
  getCss(className: string): string {
    const ownProps = Object.keys(this)
    const allProps = Object.getOwnPropertyNames(this)
    let res = ""

    for (const prop of ownProps) {
      if (allProps.indexOf(prop) < 0)
        continue // Skip if not present in the prototype chain
      let val = this[prop]
      console.log("typeof val: ", typeof val)
      console.log("typeof this: ", typeof this)
      res += `${this.camelCaseToHyphen(prop)}: ${val}; `
    }
    return `.${className} { ${res}} `;
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
}

export class AcceptBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "green"
}

export class RejectBtnStyle extends BtnStyle {
  backgroundColor: string | undefined = "red"
}

export class Styles {
  banner: BannerStyle | undefined = new BannerStyle()
  btnsContainer: btnsContainerStyle | undefined = new btnsContainerStyle()
  acceptBtn: AcceptBtnStyle | undefined = new AcceptBtnStyle()
  rejectBtn: RejectBtnStyle | undefined = new RejectBtnStyle()
}
