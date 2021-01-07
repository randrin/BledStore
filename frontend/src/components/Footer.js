const Footer = {
  after_render: () => {},
  render: () => {
    let currentYear = new Date().getFullYear();
    let createdYear = '2020';
    return `
    <div class="bledstore-footer-wrapper">
      <div class="bledstore-footer-box-one">
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
      <div class="bledstore-footer-box-two">
        <div class="bledstore-footer-copyright">
          <p>Copyright © ${currentYear > createdYear ? `<span>${createdYear} - ${currentYear}</span>` : createdYear} Bled Store. All Rights Reserved.</p>
        </div>
        <div class="bledstore-footer-payment">
          <p>Payment Methods</p>
          <img src="../../assets/images/payments.png" />
        </div>
      </div>
    </div>`
  },
};

export default Footer;
