import React from 'react'




export default function City() {
    return (
        <div className="cityName">
            <ul>
                <li onClick={() => onclick("paris")}> Paris </li>
                <li onClick={() => onclick("newyork")}> NewYork</li>
                <li onClick={() => onclick("hanoi")}> Hanoi</li>
                <li onClick={() => onclick("bangkok")}>Bangkok</li>

            </ul>




        </div>
    )
}
