import React from "react";
import "./card-list.styles.css";
import { Card } from "../Card/card.component";

export const CardList = (props) => (
    <div className="cardList">
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />//making the elements from the json file as props.
            ))
        }
    </div>//here the div contains the content of the properties which have been rendered into the props argument of it.
);



