import React,{useState, useEffect} from 'react';
import './App.scss';
import './components/Home'
import { HomeComponent, HomeProps } from './components/Home';
import { AboutComponent, AboutProps } from './components/About';

function App() {
  
  const [age, setAge] = useState(15);  
  const [content, setContent] = useState("");  
  
  const urlCallBack = (n:number)=>{
    setAge(age + 1);
  }

  const homeProps:HomeProps = {
    title: 'Home Component title',
    name: 'Home Component name',
    urlCallBack: urlCallBack,
    age: age
  }

  const aboutProps:AboutProps = {
    content: content
  }

  useEffect(()=>{
    setContent(`${age > 15? "Can drive": "Cannot drive"}`);

  }, [age]);


  return (
    <React.Fragment>
      <HomeComponent {...homeProps}></HomeComponent>
      <AboutComponent {...aboutProps}></AboutComponent>
    </React.Fragment>
  );
}

export default App;