

import React, {useState, useEffect} from 'react';


const Check = () => {
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [followers,setFollowers] = useState("");
    const [following,setFollowing] = useState("");
    const [repo,setRepos] = useState("");
    const [avatar,setAvatar] = useState("");
    const [user,setUser] = useState("");
    

    useEffect(() => {
        fetch(`https://api.github.com/users/example`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })

    },[])

    const setData = ({name,login,followers,following,public_repos,avatar_url}) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setAvatar(avatar_url);
        setRepos(public_repos);
    }
    const handleSearch = (e) => {
        setUser(e.target.value);
        
      }
      
      const handleSubmit =() => {
        fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => {
          
          setData(data);
          
        })
      }
    

    return (
    <>
    
        <input type="text" placeholder="username" name="name" onChange={handleSearch}/>
        <button onClick={handleSubmit}>Search</button>
    
    <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={avatar} alt="Card image cap" />
        <div class="card-body">
            <p class="card-text"><strong>Name:</strong> {name} <br /><strong>UserName: </strong>{userName} <br /><strong>Followers:</strong> {followers} <br /><strong>Following:</strong> {following} <br /><strong>Repository:</strong> {repo}</p>
        </div>
    </div>
    
    </>
    );
}
 
export default Check;
