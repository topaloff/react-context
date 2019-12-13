import React, { useContext } from 'react';
import MainContext from '../../store/MainContext'

function List(props) {
    const mainContext = useContext(MainContext);
    let beers = Object.values(mainContext).map((beer)=><div >biere : {beer.name}</div>)
    return (
        <div className="">
            {beers}
        </div>
    );
}

export default List;