import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './InfoBox.css';

function InfoBox(props) {
    return (
        <Card className={`infoBox ${props.active&&'infoBox--selected'} ${props.isRed&&'infoBox--red'} ${props.isGrey&&'infoBox--grey'}`} onClick={props.onClick}> 
            <CardContent>
                {/* Title */}
                <Typography className="infoBox__title" color="textSecondary">{props.title}</Typography>
                {/* Number of Cases */}
                <h2 className={`infoBox__cases ${!props.isRed&&"infoBox__cases--green"} ${props.isGrey&&"infoBox__cases--grey"}`}>{props.cases}</h2>
                {/* Total */}
                <Typography className="infoBox__total" color="textSecondary">Total {props.title}:- {props.total}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
