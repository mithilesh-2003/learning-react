import Basic from './Basic'
import Card from './Card'

function App  () {
  const printName=()=>{
    console.log("dafsgdhfjgj")
  }
  return <div>
    <h1>Hello</h1>
      <h1>Welcome</h1>
      <p>I am Dheeraj.</p>
      <button>hggjhg</button>
      <Card name="Ram" professsion="Student"/>
      <Card name="Mithilesh" professsion="IAS"/>
      <Card name="STY" professsion="STG"/>
      
      
      <div style={{display:"flex",justifyContent:"space-around"}}>

      <Basic img="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712" title="sdgfhgjh" desc="rfeesdgn"/>
      <Basic img="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712" title="aasdegb" desc="wwefgh"/>
      <Basic img="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712" title="dhjvfivl n" desc="fghj"/>
      </div>
      <div>pushpa="nnbvvccn"</div>
      {/* --------------------------------------------------------------------------- */}
      <button onClick={printName}>see more</button>
   </div>
}
export default App