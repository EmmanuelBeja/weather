import { FormattedMessage } from 'react-intl';

const Greetings = () => {
  return (
    <div className="text-[white] m-[20px] z-10">
      <h1>
        <FormattedMessage id="app.greeting" />
      </h1>
    </div>
  );
};

export default Greetings;
