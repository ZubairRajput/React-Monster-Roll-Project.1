import { useState ,useEffect } from "react";
import Cardlist from "./Component/card-list/cardlist.componet";
import Searchbox from "./Component/serch-box/search-box.comp";
import './App.css';

const App = ()=>{
    const [serachfield,setSearchfield]=useState('');
    const[monsters,setmonster]=useState([]);
    const[newfilmnst,setfilmnst]=useState([monsters]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response)=>Response.json())
        .then((users)=>setmonster(users)
        );
    },[]);

    useEffect(()=>{
          
    const newfilmnst=monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(serachfield);
    
    });
    setfilmnst(newfilmnst);
    },[monsters,serachfield])

    const OnseachChange=(event)=>{
        const serachfieldstring=event.target.value.toLowerCase();
        setSearchfield(serachfieldstring);
    }
    
    const filmnst=monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(serachfield);
    });
    return(
        
        <div className="App">
        <h1>Monster</h1>
    <Searchbox className='monster-search-box'
     onchangehandler={OnseachChange}
     placeholder='serchmnster'/>
         <Cardlist monsters={filmnst}/>  
    </div>
    )
}
export default App;
