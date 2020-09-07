import React from 'react';

import Stats from './component/Stats';
import Cards from './component/Cards';


function App() {
  return (
  <>
    <h1 className="container" style={{textAlign: "center"}}>GitHub-Compare</h1>
    <input type="text" name="name" placeholder="enter account name"></input>
    {/* <button onClick={onCompare}>Add</button> */}
    
    <Stats />
    {/* <Cards /> */}
    </>
  );
}

export default App;
