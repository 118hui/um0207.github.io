import dogs from '../assets/g-1.jpg';
import cats from '../assets/g-2.jpg';
import limited from '../assets/g-3.jpg';

const Serve = () => {
  return (
    <div>
      <section className='package' id='package'>
        <div className='container'>
          <h2 className='h2 section-title'>服務項目</h2>

          <p className='section-text'>提供豐富的狗貓矯正服務課程</p>

          <ul className='package-list'>
            <li>
              <div className='package-card'>
                <figure className='card-banner'>
                  <img src={dogs} alt='Experience The Great Holiday On Beach' loading='lazy' />
                </figure>

                <div className='card-content'>
                  <h3 className='h3 card-title'>安心住宿</h3>

                  <p className='card-text'>內頁說明欄位輸入的內容，內頁說明欄位輸入的內容！</p>

                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='time'></ion-icon>

                        <p className='text'>1.5hr</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='people'></ion-icon>

                        <p className='text'>兩隻成團</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='location'></ion-icon>

                        <p className='text'>公司內部</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='card-price'>
                  <div className='wrapper'>
                    <div className='card-rating'>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                    </div>
                  </div>

                  <p className='price'>狗狗</p>

                  <button className='btn btn-secondary'>了解更多</button>
                </div>
              </div>
            </li>

            <li>
              <div className='package-card'>
                <figure className='card-banner'>
                  <img src={cats} alt='Summer Holiday To The Oxolotan River' loading='lazy' />
                </figure>

                <div className='card-content'>
                  <h3 className='h3 card-title'>到府照顧</h3>

                  <p className='card-text'>內頁說明欄位輸入的內容，內頁說明欄位輸入的內容！</p>

                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='time'></ion-icon>

                        <p className='text'>1.5hr</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='people'></ion-icon>

                        <p className='text'>兩歲以上</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='location'></ion-icon>

                        <p className='text'>公司內部</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='card-price'>
                  <div className='wrapper'>
                    <div className='card-rating'>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                    </div>
                  </div>

                  <p className='price'>貓咪</p>

                  <button className='btn btn-secondary'>了解更多</button>
                </div>
              </div>
            </li>

            <li>
              <div className='package-card'>
                <figure className='card-banner'>
                  <img src={limited} alt="Santorini Island's Weekend Vacation" loading='lazy' />
                </figure>

                <div className='card-content'>
                  <h3 className='h3 card-title'>期間限定服務</h3>

                  <p className='card-text'>內頁說明欄位輸入的內容，內頁說明欄位輸入的內容！</p>

                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='time'></ion-icon>

                        <p className='text'>2hr</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='people'></ion-icon>

                        <p className='text'>三歲以上</p>
                      </div>
                    </li>

                    <li className='card-meta-item'>
                      <div className='meta-box'>
                        <ion-icon name='location'></ion-icon>

                        <p className='text'>顧客家中</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='card-price'>
                  <div className='wrapper'>
                    <div className='card-rating'>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                      <ion-icon name='star'></ion-icon>
                    </div>
                  </div>

                  <p className='price'>其他服務</p>

                  <button className='btn btn-secondary'>了解更多</button>
                </div>
              </div>
            </li>
          </ul>

          <button className='btn btn-primary'>更多服務</button>
        </div>
      </section>
    </div>
  );
};

export default Serve;
