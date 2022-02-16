
import React, { useEffect, useState } from 'react';

import {api, flags} from './service/api'
//import flags from './service/flags'
import './App.css';


function App() {
  const [card, setCard] = useState([]);
  // const [flag, setFlag] = useState('');
  // const [selectFlag, setSelectFlag] = useState('');
  const [ setFinishedTimeout] = useState(false);
  useEffect(() => {
    
    country();
    flagss();
    const id = setTimeout(()=> {
      setFinishedTimeout(true);
    }, 2000);

    return ()=> clearTimeout(id);
   
  
  }, []);

 
  let all = []
  let setFlags = []

  async  function country() {
    await  api.get("/countries").then(response => {
        //  console.log('Bora codar', response.data)
        // setCard(response.data)

      flags.get("all").then(atual =>{
           console.log(atual.data, "flags")
  
           setFlags = atual.data.map((item)=> {
  
            let vava = {
              name : item.name.common,
              flagban : item.flags.svg,
              cca3: item.cca3,

            }
            return vava 
            
            
          })
          // console.log('loucura', setFlags)
  

          
          

        for(let i = 0; i < response.data.length; i++){
          const oi = setFlags.filter((item)=> response.data[i].country == 
          item.name)
          //  console.log( 'find' , oi[0]?.flagban)
          if(oi[0]?.flagban === undefined){
            const oi = setFlags.filter((item)=> response.data[i].country == 
            item.cca3)
            
            all.push( {
              bandeira: oi[0]?.flagban,
              active: response.data[i].active,
               cases: response.data[i].cases,
               casesPerOneMillion: response.data[i].casesPerOneMillion,
               country: response.data[i].country,
               critical: response.data[i].critical,
               deaths: response.data[i].deaths,
               deathsPerOneMillion: response.data[i].deathsPerOneMillion,
               recovered: response.data[i].recovered,
               testsPerOneMillion: response.data[i].testsPerOneMillion,
               todayCases: response.data[i].todayCases,
               todayDeaths: response.data[i].todayDeaths,
               totalTests: response.data[i].totalTests
             
             })
          }else {
           all.push( {
             bandeira: oi[0]?.flagban,
             active: response.data[i].active,
              cases: response.data[i].cases,
              casesPerOneMillion: response.data[i].casesPerOneMillion,
              country: response.data[i].country,
              critical: response.data[i].critical,
              deaths: response.data[i].deaths,
              deathsPerOneMillion: response.data[i].deathsPerOneMillion,
              recovered: response.data[i].recovered,
              testsPerOneMillion: response.data[i].testsPerOneMillion,
              todayCases: response.data[i].todayCases,
              todayDeaths: response.data[i].todayDeaths,
              totalTests: response.data[i].totalTests
            
            }
            )}
         
   setCard(all)
  }
  
       
        })

        
       
      })

      
    }

    function flagss(){
      
     
        
      
    }

    
  return (

   <>
    
      <div className='container-fluid'>
        
      
      <div className="row">
          {
            console.log(card.length, card)
          }
      
         
          {
         
               card.length > 1 ? 
             
         
          card.map((item, i) => {
            
           if(item.bandeira != undefined){
            return(
              


            <div key = {i} className="col-12 col-md-3" style= {{background: "#ccc"}} >
            
              <div className='card' style= {{margin: "5px 5px", background: "#ccc"}}>
             
              <div className="img" style= {{display: "flex", justifyContent: "space-between"}}>
               <h2 className="title" style={{marginTop: "15px", marginLeft: "10px"}}> {item.country}</h2> 
                <img style={{width: "100px", height: "70%", left: "2px", float: "right" }} src= {item.bandeira} class="card-img-top" alt="..."/>
                </div>
                 
                  <div class="card-body">
                    <p>
                      <span> <strong>Total de óbitos:</strong>  {item.deaths} </span> <br/>
                      <span> <strong>Total de recuperados:</strong>  {item.recovered} </span> <br/>
                      <span> <strong>Total de casos do dia atual:</strong>  {item.todayCases} </span> <br/>
                      <span> <strong>Total de mortes do dia atual:</strong>  {item.todayDeaths} </span> <br/>

                      
                      
                    </p>
                   
                  </div>
                      {/* { 
                
                card.map(((item) => {
                  for(let i = 0; i < 5; i++){

                    console.log('teste', i)
                    return(
                  
                      <div className="col-6">
                    <div className="App-filho">
                      <h1> {item.country}</h1>
                      </div>
                  </div>
                    
                    )

                  }
              }
                
              ))} */}
                
              </div>
            </div>
          )}
          }) :
          <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">LOADING</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          }
          </div>
       
   
 </div>
</>
     
   
  );
}

export default App;
