import React, { useState } from 'react';

export default function QueenBee() {
    const [queen, setQueen] = useState({
        points: 100,
        quantity: 1
    });
    const [workerbee, setWorkerbee] = useState({
        points: 75,
        quantity: 5
    });
    const [dronebee, setDronebee] = useState({
        points: 50,
        quantity: 8
    })
    const hitQueen = () => {
        //setQueen({points: queen.points - 8});
        const random = Math.floor(Math.random() * 3);
        if (random === 0) {
            if (queen.points - 8 < 0) {
                setQueen({ points: 0 })
            } else {
                setQueen({ ...queen, points: queen.points - 8 });
            }
        }
        if (random === 1) {
            if (workerbee.points - 10 === 0) {
                console.log('10');
                setWorkerbee({ ...workerbee, points: 75, quantity: workerbee.quantity - 1 });
            } else if (workerbee.points < 10) {
                setWorkerbee({ ...workerbee, points: workerbee.points - 10 + 75, quantity: workerbee.quantity - 1 });
                //setWorkerbee({quantity: quantity -1});
            } else {
                setWorkerbee({ ...workerbee, points: workerbee.points - 10 });
            }
        }
        
            if (dronebee.points - 12 === 0) {
                setDronebee({ ...dronebee, points: 50, quantity: dronebee.quantity - 1 });
            } else if (dronebee.points < 12) {
                setDronebee({ ...dronebee, points: dronebee.points - 12 + 50, quantity: dronebee.quantity - 1 });
            } else {
                setDronebee({ ...dronebee, points: dronebee.points - 12 })
            }
        
    }
    return (
        <>
            <p>{queen.points}</p>
            {
                Array(queen.quantity).fill(1).map(queen => <div key={queen} className='queen'></div>)
            }
            {
                Array(workerbee.quantity).fill(1).map(worker => <div key={worker} className='worker'></div>)
            }
            {workerbee.quantity >= 0 &&
                <p>{workerbee.points} {workerbee.quantity}</p>
            }
            {dronebee.quantity > 0 && dronebee.quantity !== 0 &&
                <p>{dronebee.points} {dronebee.quantity}</p>
            }
            {Array(dronebee.quantity).fill(1).map(dronebee => <div key={dronebee} className='dronebee'></div>)}
            <button onClick={hitQueen}>Hit</button>
        </>
    );
}