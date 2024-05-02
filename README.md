<img src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" data-canonical-src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" width="100%" />

[![Build Status](https://app.cloudback.it/badge/EasyCookies/EasyCookies)](https://cloudback.it)
[![Downloads](https://data.jsdelivr.com/v1/package/gh/EasyCookies/EasyCookies/badge)](https://www.jsdelivr.com/package/gh/EasyCookies/EasyCookies)

# 🍪 EasyCookies 🍪

A customizable cookie consent banner library for websites.

![demo](https://github.com/EasyCookies/EasyCookies/assets/6689884/3809e265-d4a6-483d-bfab-02fefc3acad9)


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
