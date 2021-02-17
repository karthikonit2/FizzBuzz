import React, { useState } from 'react';




import InValue from './component/InValue';
import Output from './component/Output';

function App() {

  const [out, setOut] = useState('');

  const submitHandler = (value) => {

    // alert(e)
    let word = '';

    let three = value % 3;
    let five = value % 5;





    if (!three && five) {
      word = 'Fizz'
    }


    if (three && !five) {
      word = 'Buzz'
    }

    if (!three && !five) {
      word = 'FizzBuzz'
    }


    setOut(word);



  }

  return (
    <div className="App">
      <InValue submitHandler={submitHandler} />
      <Output word={out} />
    </div>
  );
}

export default App;
