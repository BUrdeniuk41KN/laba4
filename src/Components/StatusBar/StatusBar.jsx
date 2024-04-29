import React from 'react';
import {toggleTrafic, changeColor} from './Actions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const StatusBar = () => {
    const typeOBJ = useSelector(state => state.toggleTraficType);
    const selectedOPred = useSelector(state => state.redColor);
    const selectedOPyelow = useSelector(state => state.yelowColor);
    const selectedOPgreen = useSelector(state => state.greenColor);
    const dispatch = useDispatch();

    
    const handleBTN = () => {
        dispatch(toggleTrafic());
    }

    const hlColor = (color) => {
        dispatch(changeColor(color));
    };
    
    return (
        <div>
            Side bar 
            <Form>
                <Form.Check
                type="switch"
                id="custom-switch"
                label="Toggle type"
                checked={typeOBJ}
                onChange={() => {}}
                onClick={handleBTN}
                />
            </Form>
            <br></br>
            <p>Change color</p>
            <Form>
                
                <Form.Check
                type="radio"
                id="option1"
                label={"Red: " + selectedOPred.coutntActive}
                name="Red"
                value="red"
                checked={selectedOPred.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("red")}
                />
                <Form.Check
                type="radio"
                id="option2"
                label={"Yelow: " + selectedOPyelow.coutntActive}
                name="yelow"
                value="yelow"
                checked={selectedOPyelow.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("yelow")}
                />
                <Form.Check
                type="radio"
                id="option3"
                label={"Green: " + selectedOPgreen.coutntActive}
                name="green"
                value="green"
                checked={selectedOPgreen.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("green")}
                />
            </Form>
        </div>
    );
}

export default StatusBar;
