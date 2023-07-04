import './currentWeather.css';

const CurrentWeather = () => {
    return <div className='weather'>
            <div className='top'>
                <p className='city'>Philadelphia</p>
                <p className='weather-description'>Sunny</p>
            </div>
            <img alt='weather' className='weather-icon' src='img/Clear.png'/>
        </div>;
}

export default CurrentWeather;