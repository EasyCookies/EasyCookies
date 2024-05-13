<img src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" data-canonical-src="https://raw.githubusercontent.com/EasyCookies/EasyCookies/main/social.png" width="100%" />

[![Build Status](https://app.cloudback.it/badge/EasyCookies/EasyCookies)](https://cloudback.it)
[![Downloads](https://data.jsdelivr.com/v1/package/gh/EasyCookies/EasyCookies/badge)](https://www.jsdelivr.com/package/gh/EasyCookies/EasyCookies)

# 🍪 EasyCookies 🍪

A customizable cookie consent banner library for websites.

![EasyCookies](https://github.com/EasyCookies/EasyCookies/assets/6689884/1f424fa5-7f5a-43a7-9898-9c501d9dc73d)

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

## What's supported

As for now, EasyCookies banner supports Google Analytics (gtag.js or Tag Manager) consent.

### Google Analytics

By dafault, the consent is set to `denied` for all parameters:
```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
```

When the user accepts cookies, the consent is set to `granted` fro all parameters:
```javascript
gtag('consent', 'update', {
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'ad_storage': 'granted',
  'analytics_storage': 'granted'
});
```

There are plans to make more granular consent in the future, but feel free to raise an issue with feature request if you need it now.

### Set up Google Analytics

If your website is using Google tag (gtag.js), you can set up EasyCookies using the `gtag` property:
```html
  <script>
    window.easyCookiesBanner = new EasyCookies.Banner({
      scripts: {
        gtag: '<your_google_analytics_tag_id>'
      }
    });
    window.easyCookiesBanner.init(); 
  </script>
```

For sites using Tag Manager, use the `gtm` property:
```html
  <script>
    window.easyCookiesBanner = new EasyCookies.Banner({
      scripts: {
        gtm: '<your_google_tag_manager_id>'
      }
    });
    window.easyCookiesBanner.init(); 
  </script>
```

## Contribute

All contributions are welcome! Feel free to raise any issues (bugs or feature requests), submit pull requests, etc.
