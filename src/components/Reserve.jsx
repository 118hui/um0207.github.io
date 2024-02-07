import dog from '../assets/d-1.jpg';
import cat from '../assets/d-2.jpg';
import boy from '../assets/d-3.jpg';

const Reserve = () => {
  return (
    <div>
      <section className='popular' id='destination'>
        <div className='container'>
          <h2 className='h2 section-title'>預約課程</h2>

          <p className='section-text'>一直秉持著正向、積極、熱情的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。透過不打罵、正面鼓勵的方式讓毛孩們在愛中成長。</p>

          <ul className='popular-list'>
            <li>
              <div className='popular-card'>
                <figure className='card-img'>
                  <img src={dog} alt='San miguel, italy' loading='lazy' />
                </figure>

                <div className='card-content'>
                  <div className='card-rating'>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                  </div>

                  <p className='card-subtitle'>
                    <a href='#'>狗狗</a>
                  </p>

                  <h3 className='h3 card-title'>
                    <a href='#'>一對一/團體</a>
                  </h3>

                  <p className='card-text'>一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。</p>
                </div>
              </div>
            </li>

            <li>
              <div className='popular-card'>
                <figure className='card-img'>
                  <img src={cat} alt='Burj khalifa, dubai' loading='lazy' />
                </figure>

                <div className='card-content'>
                  <div className='card-rating'>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                  </div>

                  <p className='card-subtitle'>
                    <a href='#'>貓貓</a>
                  </p>

                  <h3 className='h3 card-title'>
                    <a href='#'>一對一</a>
                  </h3>

                  <p className='card-text'>具備豐富的貓行為與狗行為的專業知識背景。</p>
                </div>
              </div>
            </li>

            <li>
              <div className='popular-card'>
                <figure className='card-img'>
                  <img src={boy} alt='Kyoto temple, japan' loading='lazy' />
                </figure>

                <div className='card-content'>
                  <div className='card-rating'>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                  </div>

                  <p className='card-subtitle'>
                    <a href='#'>寵物大小事</a>
                  </p>

                  <h3 className='h3 card-title'>
                    <a href='#'>期間限定</a>
                  </h3>

                  <p className='card-text'>盡請把握期間限定優惠的課程，盡請把握期間限定優惠的課程。</p>
                </div>
              </div>
            </li>
          </ul>
          <button className='btn btn-primary'>更多課程</button>
        </div>
      </section>
    </div>
  );
};

export default Reserve;
