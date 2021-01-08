const Footer = {
  after_render: () => {
    var scrollToTopBtn = document.querySelector(".bledstore-footer-scrollToTopBtn");
    var rootElement = document.documentElement;

    function handleScroll() {
      // do something on scroll
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.8) {
        //show button
        scrollToTopBtn.style.display = "block";
      } else {
        //hide button
        scrollToTopBtn.style.display = "none";
      }
    }

    function scrollToTop() {
      //scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
  },
  render: () => {
    const currentYear = new Date().getFullYear();
    const createdYear = "2020";
    return `
    <button class="bledstore-footer-scrollToTopBtn"><i class="fa fa-angle-up"></i></button>
    <div class="bledstore-footer-wrapper">
      <div class="bledstore-footer-box">
        <div class="bledstore-footer-store">
          <h2>Bled Store</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div class="bledstore-footer-socials">
            <a href="javaScript:void(0);" class="bledstore-social-facebook" title="Facebook Store"><i class="fa fa-facebook"></i></a>
            <a href="javaScript:void(0);" class="bledstore-social-twitter" title="Twitter Store"><i class="fa fa-twitter"></i></a>
            <a href="javaScript:void(0);" class="bledstore-social-instagram" title="Instagram Store"><i class="fa fa-instagram"></i></a>
            <a href="javaScript:void(0);" class="bledstore-social-youtube" title="Youtube Store"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
        <div class="bledstore-footer-link">
          <a href="javaScript:void(0);" class="footer-link" title="Terms and Conditions">Terms and Conditions</a>
          <a href="javaScript:void(0);" class="footer-link" title="Privacies Policies">Privacies Policies</a>
          <a href="javaScript:void(0);" class="footer-link" title="Cookies Policies">Cookies Policies</a>
          <div class="bledstore-footer-appstore">
            <a href="javaScript:void(0);" title="App Store"><img src="../../assets/images/appstores/App_Store.png" /></a>
            <a href="javaScript:void(0);" title="Google Play"><img src="../../assets/images/appstores/Google_Play.png" /></a>
          </div>
        </div>
        <div class="bledstore-footer-contact">
          <div class="footer-call">
            <i class="icon-phone fa fa-phone"></i>
            <span>Got Question? Call us 24/7</span>
            <a href="javaScript:void(0);" class="footer-number">6 46 55 87 98</a>
          </div>
        </div>
      </div>
      <hr class="bledstore-footer-dividing-line" />
      <div class="bledstore-footer-box">
        <div class="bledstore-footer-box-quarter">
          <h2>Who we are?</h2>
          <div class="box-quarter">
            <a href="javaScript:void(0);" title="">About Bled Store</a>
            <a href="javaScript:void(0);" title="">Carrer at Bled Store</a>
            <a href="javaScript:void(0);" title="">Our Services</a>
            <a href="javaScript:void(0);" title="">Our Partners</a>
            <a href="javaScript:void(0);" title="">Our News</a>
            <a href="javaScript:void(0);" title="">Our Blogs</a>
          </div>
        </div>
        <div class="bledstore-footer-box-quarter">
          <h2>My Account</h2>
          <div class="box-quarter">
            <a href="/#/signin" title="">Sign In / Sign Up</a>
            <a href="javaScript:void(0);" title="">How to create an account</a>
            <a href="javaScript:void(0);" title="">My Shopping Cart</a>
            <a href="javaScript:void(0);" title="">My Wishlist</a>
            <a href="javaScript:void(0);" title="">Track my order</a>
          </div>
        </div>
        <div class="bledstore-footer-box-quarter">
          <h2>Customer Services</h2>
          <div class="box-quarter">
            <a href="javaScript:void(0);" title="">How to buy on xxxx</a>
            <a href="javaScript:void(0);" title="">Our Payments Methods</a>
            <a href="javaScript:void(0);" title="">Informations Delivery</a>
            <a href="javaScript:void(0);" title="">Our FAQs</a>
            <a href="javaScript:void(0);" title="">Contact Us</a>
            <a href="javaScript:void(0);" title="">Need other help?</a>
          </div>
        </div>
        <div class="bledstore-footer-box-quarter">
          <h2>Our Shop</h2>
          <div class="box-quarter">
            <a href="javaScript:void(0);" title="">Our offers of the day</a>
            <a href="javaScript:void(0);" title="">Our News & Promotions</a>
            <a href="javaScript:void(0);" title="">Our Trend Products</a>
            <a href="javaScript:void(0);" title="">Our Recommandations</a>
            <a href="javaScript:void(0);" title="">Flash Sale</a>
            <a href="javaScript:void(0);" title="">Become Seller at Bled Store</a>
          </div>
        </div>
      </div>
      <hr class="bledstore-footer-dividing-line" />
      <div class="bledstore-footer-box">
        <div class="bledstore-footer-copyright">
          <p>Copyright © ${
            currentYear > createdYear
              ? `<span>${createdYear} - ${currentYear}</span>`
              : createdYear
          } Bled Store. All Rights Reserved.</p>
        </div>
        <div class="bledstore-footer-payment">
          <p>Payment Methods</p>
          <img src="../../assets/images/payments.png" />
        </div>
      </div>
    </div>`;
  },
};

export default Footer;
