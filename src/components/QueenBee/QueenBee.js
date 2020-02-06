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
    const [dronebee, setDronebee] = useState( {
        points: 50,
        quantity: 8
    })
    const hitQueen = () => {
    //setQueen({points: queen.points - 8});
    const random = Math.floor(Math.random() * 3);
    if(random === 2 ) {
        if(workerbee.points - 10 === 0) {
            console.log('10');
            setWorkerbee({...workerbee, points: 75, quantity: workerbee.quantity - 1});
        }else if (workerbee.points < 10) {
            setWorkerbee({...workerbee, points: workerbee.points - 10  + 75, quantity: workerbee.quantity - 1});
            //setWorkerbee({quantity: quantity -1});
        } else {
            setWorkerbee({...workerbee, points: workerbee.points - 10 });
        }
    }
    setDronebee({points: dronebee.points - 12})
}
    return(
        <>
            
                <p>{queen.points}</p>
                {
                    Array(workerbee.quantity).fill(1).map(worker => <div key={worker} className='worker'></div>)
                }
            {workerbee.quantity !== 0 && 
                <p>{workerbee.points} {workerbee.quantity}</p>
            }
            <button onClick={hitQueen}>Hit</button>
        </>
    );
}