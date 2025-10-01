import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Card = (props) => {
    const {username} = useParams();
    console.log(username)
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                BACK
            </button>
            <div>{username}</div>
        </div>
    )
}

export default Card;
