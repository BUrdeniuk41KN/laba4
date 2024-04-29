import React from 'react';
import toggleTrafic from './Actions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const StatusBar = () => {
    const typeOBJ = useSelector(state => state.toggleTraficType);
    const dispatch = useDispatch();

    const handleBTN = () => {
        dispatch(toggleTrafic());
    }

    const hl = () => {};

    return (
        <div>
            Side bar 
            <Form>
                <Form.Check
                type="switch"
                id="custom-switch"
                label="Toggle type"
                checked={typeOBJ}
                onChange={handleBTN}
                />
            </Form>
        </div>
    );
}

export default StatusBar;
