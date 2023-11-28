import './App.css';




function App(props) {
  // code here
  let data = props.imageData();
  let images = [];
  for(let i=0; i < data.length; i+=2){
    let firstImg = data[i];
    let secondImg = data[i+1];
    images.push(
      <div className='img-style'>
        <img src={firstImg.img} alt="" />
        <img src={secondImg.img} alt="" />
      </div>
    );
  }
  return <div>{images}</div>
}

export default App;


