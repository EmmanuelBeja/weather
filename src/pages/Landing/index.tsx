import LocalePicker from '../../components/LocalePicker';
import Greetings from '../../components/Greetings';
import WeatherCard from '../../components/WeatherCard';

const Landing = () => {
  return (
    <div className="app-container h-[100vh] w-[100vw]">
      <div className="h-full w-full bg-[#0000009e] flex flex-col">
        <div className="py-5 flex">
          <LocalePicker />
        </div>
        <div className="w-full flex flex-col items-center py-20">
          <Greetings />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};
export default Landing;
