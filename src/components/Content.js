import Path from '../assets/Path.png';
import './Content.css';

const Content = (props) => {
  return (
    <section className='content__body'>
      <div className='content__img'>
        <img src={props.imageUrl} alt={'Location_Image'} />
      </div>
      <div className='content__headings'>
        <div className='content__top'>
          <div className='content__location'>
            <img src={Path} alt={'locator icon'} />
            <small>{props.location}</small>
          </div>
          <a href={`${props.googleMapsURL}`}>View on Google Maps</a>
        </div>
        <div className='content__details'>
          <h1 className='content__title'>{props.title}</h1>
          <p className='content__date'>
            <strong>
              {props.startDate} - {props.endDate}
            </strong>
          </p>
          <p className='content__des'>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
