import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  return (
    <Styled styles={styles}>
      <div className='app-direflow'>
        <div className='top'>
          <div className='header-image' />
        </div>
        <div className='bottom'>
          <h2 className='header-title'>{props.componentTitle}</h2>
          <h2 className='header-title'>Direflow Works</h2>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Micro Frontend 3',
}

export default App;
