import './App.css';
import Card from './conmponents/Card';
import Details from './conmponents/Details';
function App(props) {
  const creacteCard=(Details)=>{
    return(
      <Card
      key={Details.id}
      img={Details.img}
      name={Details.name}
      year={Details.year}
      min={Details.min}
      type={Details.type}
      information={Details.information}
      Background_img={Details.Background_img}
     />
    )
  }
  return (
   <div className="main_container">
    {Details.map(creacteCard)}
      </div>
    );
}

export default App;
