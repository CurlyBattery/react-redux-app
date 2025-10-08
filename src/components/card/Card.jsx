import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.less'

const Card = (props) => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);

    const navigate = useNavigate();

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo)
    getContributors(username, reponame, setContributors)
  }, []);

    return (
        <>
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                BACK
            </button>
            <div className="card">
              <img src={repo.owner.avatar_url} alt=""/>
              <div className="name">{repo.name}</div>
              <div className="stars">{repo.stargazers_count}</div>
            </div>
          {contributors.map((c, index) =>
          <div>{index+1}. {c.login}</div>)}
        </>
    )
}

export default Card;
