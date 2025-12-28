import './Footer.css';

export default function Footer() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4 class="footer-heading">Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#download">Download</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Legal</h4>
            <ul>
              <li><a href="./privacy.html">Privacy Policy</a></li>
              <li><a href="./terms.html">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-col newsletter">
            <h4 class="footer-heading">Stay Updated</h4>
            <p class="footer-text">Get the latest updates on Liquid Clock.</p>
            <form class="subscribe-form" onsubmit="event.preventDefault();">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" class="btn-small">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Liquid Clock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
