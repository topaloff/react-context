import React, { useEffect, useState }from "react";
import MainContext from './MainContext'

function AppProvider(props){

    let [initialValue, setInitialValue] = useState({});
    useEffect(()=>{
        fetch('https://beers-cf53e.firebaseio.com/beers.json')
        .then(res => res.json())
        .then(result => {
            setInitialValue(result);
          },
          (error) => {
                error = true;
           }
        )
    },[]);
  

  return (
    <MainContext.Provider displayName="Main Context" value={initialValue}>
      {props.children}
    </MainContext.Provider>
  );
};

export default AppProvider;