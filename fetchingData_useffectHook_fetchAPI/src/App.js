import React, {useState , useEffect} from "react";
import './App.css';

function App(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{


  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => response.json())
  // .then((data) => setData(data.splice(0,10)))

  (async ()=>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();
    setTimeout(() => {
      setData(data.splice(0,10));
      setIsLoading(false)
      
    }, 3000);

  })();
  
  },[])
  return (
    <div className="App">
      <div>
        {isLoading ? <div>Loading</div> :
      <ul>
        {data.map((item)=>{
          return <li key = {item.id}>{item.body}</li>
        })}
      </ul>
      }
      </div>
      
      
    </div>
  );
}

export default App;
