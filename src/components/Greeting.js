import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      <h1>Greeting</h1>
      <p>
        Greeting:
        {message.message}
      </p>
    </div>
  );
};

export default Greeting;
