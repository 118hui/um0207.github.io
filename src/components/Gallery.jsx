import ga1 from '../assets/ga-1.jpg';
import ga2 from '../assets/ga-2.jpg';
import ga3 from '../assets/ga-3.jpg';
import ga4 from '../assets/ga-4.jpg';
import ga5 from '../assets/ga-5.jpg';

const Gallery = () => {
  return (
    <div>
      <section className='gallery' id='gallery'>
        <div className='container'>
          <h2 className='h2 section-title'>我們的過程，牠們的一生</h2>

          <p className='section-text'>短短十來年，對我們來說只是個過程，卻是他們的一生。用愛他，當然只希望可以給他最好的。真心希望所有⽑⼩孩都能開心、自信的過每一天。</p>

          <ul className='gallery-list'>
            <li className='gallery-item'>
              <figure className='gallery-image'>
                <img src={ga1} alt='Gallery image' />
              </figure>
            </li>

            <li className='gallery-item'>
              <figure className='gallery-image'>
                <img src={ga2} alt='Gallery image' />
              </figure>
            </li>

            <li className='gallery-item'>
              <figure className='gallery-image'>
                <img src={ga3} alt='Gallery image' />
              </figure>
            </li>

            <li className='gallery-item'>
              <figure className='gallery-image'>
                <img src={ga4} alt='Gallery image' />
              </figure>
            </li>

            <li className='gallery-item'>
              <figure className='gallery-image'>
                <img src={ga5} alt='Gallery image' />
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
