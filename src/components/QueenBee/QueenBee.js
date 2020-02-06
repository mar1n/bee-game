import React, { useState } from 'react';

export default function QueenBee() {
    const [queen, setQueen] = useState({
        points: 100,
        quantity: 1
    });
    const [workerbee, setWorkerbee] = useState( {
        points: 75,
        quantity: 5
    });
    cosnt [dronebee, setDronebee] = useState( {
        points: 50,
        quantity: 8
    })
    const hitQueen = () => {
    
    setQueen({points: queen.points - 8});
    setWorkerbee({points: workerbee.points - 10 });
    setDronebee({points: dronenee.points - 12})
}
    return(
        <>
            
                <p>{queen.points}</p>
            
            
                <p>{workerbee.points}</p>
            
            <button onClick={hitQueen}>Hit</button>
        </>
    );
}