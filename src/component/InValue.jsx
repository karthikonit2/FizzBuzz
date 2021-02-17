import React, { useState } from 'react';




const InValue = ({ submitHandler }) => {

    const [input, setInput] = useState('');

    const onChangeHandler = (e) => {
        //   console.log(e.target.value);
        setInput(e.target.value);
        submitHandler(input);
    }


    return (

        <label>
            Input Word:
            <input type='text' name='word' onChange={onChangeHandler} />
            <input type='submit' value='submit' onClick={onChangeHandler}></input>
        </label>

    )

}

export default InValue;