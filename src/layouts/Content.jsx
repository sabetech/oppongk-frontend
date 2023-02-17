import React from "react";

export default function Content({children}) {

    return (
        <div style={{
            position: 'fixed', 
            top: '15%',
            marginLeft: '10%',
            marginRight: '10%'
            }}>
            {{ children }}
        </div>
    )
}