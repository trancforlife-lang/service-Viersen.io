# IT Repair Shop - Professional Website

A modern, responsive IT repair service website built with HTML, CSS, and JavaScript.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI/UX with smooth animations
- ✅ SEO optimized (meta tags, sitemap, robots.txt)
- ✅ Contact form with validation
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ Ready for production deployment

## Services

- Laptop-Reparatur
- PC-Reparatur
- Kamera-Installation
- Datenrettung
- Netzwerk & IT-Infrastruktur
- Virusentfernung & Sicherheit

## File Structure

```
it-repair-shop-pro/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images and static assets (empty by default)
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for SEO
├── .htaccess           # Apache configuration (optional)
└── README.md           # This file
```

## Quick Start

### 1. Local Development

Simply open `index.html` in your browser.

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### 2. Customization

#### Update Contact Information

Edit the contact section in `index.html`:
- Address: Find `<h3>Adresse</h3>` section
- Phone: Find `<h3>Telefon</h3>` section
- Email: Find `<h3>E-Mail</h3>` section

#### Update Meta Information

Edit the `<head>` section in `index.html`:
- Update title tag
- Update meta description
- Update canonical URL

#### Add Your Logo

Replace the icon in the navbar or add your logo image:

```html
<div class="nav-brand">
    <img src="assets/logo.png" alt="IT Repair Shop">
    <span>IT Repair Shop</span>
</div>
```

## Deployment

### Option 1: Static Hosting (Recommended)

**Netlify, Vercel, GitHub Pages**

1. Upload all files to your hosting provider
2. The site will be live instantly

### Option 2: Traditional Web Hosting

**cPanel, Plesk, FTP**

1. Upload files to `public_html` or `www` folder
2. Ensure `.htaccess` is uploaded (if using Apache)
3. Update `sitemap.xml` with your domain

### Option 3: Cloud Storage

**AWS S3, Google Cloud Storage**

1. Enable static website hosting
2. Upload all files
3. Set bucket permissions to public read
4. Update `sitemap.xml` with your bucket URL

## SEO Configuration

### Update sitemap.xml

Replace `https://it-repair-shop.de` with your actual domain.

### Update robots.txt

Update the sitemap URL in `robots.txt`.

### Update Meta Tags

In `index.html`, update:
- Canonical URL
- Open Graph tags
- Twitter Card tags (if needed)

## Form Handling

The contact form currently shows a success message. To actually process form submissions:

### Option 1: Formspree (Easy)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint URL
3. Update the form tag in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Backend Integration

Update `submitForm()` function in `js/main.js` to send data to your backend API.

## Performance Tips

1. Compress images before adding to `assets/` folder
2. Enable GZIP/Brotli compression on your server
3. Use a CDN for static assets
4. Enable browser caching (`.htaccess` included)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security

- HTTPS is recommended (`.htaccess` includes redirect)
- Security headers included in `.htaccess`
- Input validation on forms
- CSP headers can be added in `.htaccess`

## License

This website is free to use and modify for your business.

## Support

For issues or questions, please contact your web developer.

---

Built with ❤️ for IT Repair Shop
