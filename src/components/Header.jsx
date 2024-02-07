import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <header className='header' data-header>
        <div className='overlay' data-overlay></div>
        <div className='header-top'>
          <div className='container'>
            <a href='#' className='logo_title'>
              <img src={logo} alt='logo' width={170} />
            </a>
          </div>
        </div>

        <div className='header-bottom'>
          <div className='container'>
            <nav className='navbar' data-navbar>
              <div className='navbar-top'>
                <a href='#' className='logo'>
                  <img src='./assets/logo.png' alt='logo' />
                </a>
              </div>
            </nav>
            <div className='navigation'>
              <input type='checkbox' className='navigation__checkbox' id='toggle' />
              <label htmlFor='toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
                <div className='shopping'></div>
              </label>
              <div className='navigation__background'>&nbsp;</div>
              <nav className='navigation__nav'>
                <ul className='navigation__list'>
                  <li>
                    <a href='#' className='navigation__link'>
                      首頁
                    </a>
                  </li>
                  <li>
                    <a href='#destination' className='navigation__link'>
                      預約課程
                    </a>
                  </li>
                  <li>
                    <a href='#package' className='navigation__link'>
                      服務項目
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='navigation__link'>
                      聯絡我們
                    </a>
                  </li>
                  <li>
                    <a href='' className='navigation__link'>
                      知識專欄
                    </a>
                  </li>
                  <li>
                    <a href='' className='navigation__link'>
                      諮詢表單
                    </a>
                  </li>
                  <li>
                    <a href='' className='navigation__link'>
                      會員中心
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
