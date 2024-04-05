 import ListGroup from './components/ListGroup'
 function App(){
  let items = ["new york", "america", "tokyo", "london"];
  const handleSelectItem =(items:string)=>{
    console.log(items);
  }

  return <div><ListGroup items={items} heading='cities'  onSelectItem={handleSelectItem}/></div>

}
export default App;