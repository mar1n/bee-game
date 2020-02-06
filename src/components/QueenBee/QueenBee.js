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
    });
    const [reset, setReset] = useState({
        message: 'Play, Game!'
    });
    const hitQueen = () => {
        const random = Math.floor(Math.random() * 3);
        if (random === 0) {
            if (queen.points - 8 < 0) {
                setQueen({ points: 0 })
                setReset({ message: 'Wait 2s reset is on the way!' })
                setTimeout(function reset() {
                    setQueen({ points: 100, quantity: 1 });
                    setWorkerbee({ points: 75, quantity: 5 });
                    setDronebee({ points: 50, quantity: 8 });
                    setReset({ message: 'Play, Game!' });
                }, 2000)
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
            <div className='container'>
                <h1>{reset.message}</h1>
                {queen.points !== 0 && Array(queen.quantity).fill(1).map(queen => <div key={queen} className='queen'></div>)}
                {workerbee.quantity >= 0 &&

                    Array(workerbee.quantity).fill(1).map(worker => <div key={worker} className='worker'></div>)
                }
                {dronebee.quantity > 0 && dronebee.quantity !== 0 &&
                    Array(dronebee.quantity).fill(1).map(dronebee => <div key={dronebee} className='dronebee'></div>)
                }
                <button onClick={hitQueen} >Hit</button>
            </div>
        </>
    );
}