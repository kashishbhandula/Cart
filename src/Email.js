
import React, { useState, useEffect } from 'react';
//useEffect combination of all three cycle components
//useEffect run after everyrender

function UserInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function onhandle(e) {

        setValue(e.target.value);
    }
    return{
        value:value,
        onChange : onhandle
    };
}

function Email() {
    // const emailState = useState('kashish@112');// hook
    // const email = emailState[0];
    // const setEmail = emailState[1];//function setState

    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // function handleChange(e) {
    //     setEmail(e.target.value)
    // }
    // function handleChangeName(e) {
    //     setName(e.target.value)
    // }
    const email = UserInput('');
    const name= UserInput('');
    /*useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })
    


    },[])//empty array so that it render only once
    // array contain dependencies if a variable in array rerender
    */
    useEffect(() => {

        //document.addEventListener('mousemove', setCoordinate);

        return () => {
            document.removeEventListener('mousemove', setCoordinate);
            //cleanup
        }


    })
    function setCoordinate(event) {
        console.log(event.clientX);
    }

    return (

        <div className="Email" style={{ padding: 10 }}>
            <input 
                type="text"
                {...email}
                // value={email}
                // onChange={handleChange}

            />
            <p>Email:{email.value}</p>
            <input
                
                {...name}
                // value={name}
                // onChange={handleChangeName}

            />
            <p>Name:{name.value}</p>
        </div>
    );


}

export default Email;
