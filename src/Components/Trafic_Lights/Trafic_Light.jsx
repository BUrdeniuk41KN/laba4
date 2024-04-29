import React from 'react';
import './TraficLight.css'

const TraficLight = (props) => {
    let id_red = "color_red";
    let id_yelow = "color_yelow";
    let id_green = "color_green";

    let Rid_red = "color_red";
    let Rid_yelow = "color_yelow";
    let Rid_green = "color_green";

    let id_active = "_Active";

    switch(props.tlColorDef){
        case "Red" || "red":
            Rid_red = id_red + id_active;
            break;
        case "Yelow" || "yelow":
            Rid_yelow = id_yelow + id_active;
            break;
        case "Green" || "green":
            Rid_green = id_green + id_active;
            break;
    }

    return (
        <div className='container'>
            <p>Color Active = {props.tlColorDef}</p>
            <div className="contain_trafic">
                <div className={"trafic trafic_" + props.typeOne}>
                    <div id={Rid_red} className='colors'></div>
                    <div id={Rid_yelow} className='colors'></div>
                    <div id={Rid_green} className='colors'></div>
                </div>
                <div className={"trafic trafic_" + props.typeTwo}>
                    <div id={Rid_red + 1} className='colors'></div>
                    <div id={Rid_yelow + 1} className='colors'></div>
                    <div id={Rid_green + 1} className='colors'></div>
                </div>
            </div>
        </div>
    );
}

export default TraficLight;
