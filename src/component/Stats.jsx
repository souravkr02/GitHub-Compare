import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { Card, Avatar } from 'antd';


const API_KEY = "https://api.github.com/users/";
const input = "souravkr02";
const Stats = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [repo, setRepo] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch(`${API_KEY}${input}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUserName(login);
    setFollower(followers);
    setFollowing(following);
    setRepo(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <>
    
    <Card style={{ width: 300 }}>
    <img src={avatar} style={{height:150, width:150}}/>
    <p>{`Name : ${name}`}</p>
    <p>{`Username : ${userName}`}</p>
    <p>{`Follower : ${follower}`}</p>
    <p>{`Following : ${following}`}</p>
    <p>{`Repo : ${repo}`}</p>
  </Card>  
 
    </>
  );
};
export default Stats;


