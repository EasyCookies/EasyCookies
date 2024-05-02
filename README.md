<img src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" data-canonical-src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" width="100%" />

# 🍪 EasyCookies 🍪

A customizable cookie consent banner library for websites.

## Usage

Add this code to your html `<head>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/EasyCookies/EasyCookies@0.0.2/easyCookies.min.js"></script>
```

Then initialize the banner by adding the following code to you html `<body>` tag:
```html
  <script>
    window.easyCookiesBanner = new EasyCookies.Banner({
      scripts: {
        gtag: '<your_google_analytics_tag>'
      }
    });
    window.easyCookiesBanner.init(); 
  </script>
```
