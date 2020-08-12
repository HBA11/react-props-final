import React from 'react';
import './App.css';
import Profile from './profile/Profile';

let photochristiano = "https://fr.web.img3.acsta.net/pictures/20/01/16/09/48/3201727.jpg"
const data=[
  {fullName:"will smith",bio:"bio",profession:"actor",image:"https://fr.web.img3.acsta.net/pictures/20/01/16/09/48/3201727.jpg"},]
  const handleName=(par)=>{
    alert(par)
  }


function App() {
  return (
    <div className="App">
     <Profile data={data} handleName={handleName}>
        <img style={{width:"300px"}} src={photochristiano}/>

     </Profile>

    </div>
  );
}

export default App;
