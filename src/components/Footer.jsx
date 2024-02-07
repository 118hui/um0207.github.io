import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='footer-brand'>
              <a href='#' className='logo'>
                <img src={logo} alt='logo' />
              </a>
              <p className='footer-text'>U-MONSTER-有怪獸企業有限公司。希望以更完整、更值得信賴的專業形象與大家見面。</p>
              <p className='footer-text'>提供完善正向訓練，拉近您和毛小孩的距離。</p>
            </div>

            <div className='footer-contact'>
              <h4 className='contact-title'>主要項目</h4>

              <ul>
                <li>
                  <a href='' className='contact-link'>
                    首頁
                  </a>
                </li>
                <li>
                  <a href='' className='contact-link'>
                    關於我們
                  </a>
                </li>
                <li>
                  <a href='' className='contact-link'>
                    服務項目
                  </a>
                </li>
                <li>
                  <a href='' className='contact-link'>
                    諮詢表單
                  </a>
                </li>
                <li>
                  <a href='' className='contact-link'>
                    會員中心
                  </a>
                </li>
                <br />
                <li className='contact-item'>
                  <ion-icon name='call-outline'></ion-icon>

                  <a href='tel:+01123456790' className='contact-link'>
                    0900-761-178
                  </a>
                </li>

                <li className='contact-item'>
                  <ion-icon name='mail-outline'></ion-icon>

                  <a href='mailto:info.tourly.com' className='contact-link'>
                    umonster.asia@gmail.com
                  </a>
                </li>

                <li className='contact-item'>
                  <ion-icon name='location-outline'></ion-icon>

                  <address>台中市⻄屯區市政北一路1號3樓</address>
                </li>
              </ul>
            </div>

            <div className='footer-form'>
              <p className='form-text'>歡迎詢問任何問題</p>

              <form action='' className='form-wrapper'>
                <input type='email' name='email' className='input-field' placeholder='Enter Your Email' required />

                <button type='submit' className='btn btn-secondary'>
                  寄出
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='container'>
            <p className='copyright'>&copy; 2024 All rights reserved 有怪獸企業有限公司</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
