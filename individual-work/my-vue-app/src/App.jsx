import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProjectItems from './ProjectItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classNameName="App">
      <header>
			<div classNameName="wrapper">
				<nav>
					<a href="#"><div classNameName="logo">&#10052;Logo</div></a> <a href="#">About</a> <a href="#">Services</a> <a href="#">Portfolio</a> <div classNameName="kontakt"><a href="#">Contact</a></div> 
				</nav>  
			</div>
		</header>
    <div classNameName="newContainer">
        Portfolio <div className="mainTitle">Recent Work</div>
        <hr /><br />
        <div classNameName="container">
		<img src="https://itras.cz/fotogalerie/krkonose/velke/nad-labskou-boudou-krkonose-001.jpg"/>
		
		<img src="https://www.kreativnievropa.cz/co5fokmmap3aa309/uploads/2022/09/thumbnail_51881196741_06fcb07df3_o.jpg"/>
	</div><br /><br />
  <div className="textContainer">
		<div className="titleL">
            Lorem ipsum dolor sit amet 
		</div>
		<div className="titleP">
			Lorem ipsum dolor sit amet
		</div>
	</div><br />
  <div className="container">
       <div className="textL">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolorum vero sunt similique ut veniam et ratione qui autem dolores accusantium iure tempore ipsum voluptatem, eligendi, deserunt, adipisci facere sequi?
	   </div>
	   <div className="textP">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe unde autem earum inventore fuga non deserunt, dolorem ullam porro quam mollitia laborum iure! Excepturi, ut sit voluptates modi eos mollitia!
	   </div>
	</div> <br /><br />
	<div className="container">
		<img src="https://cdn.pixabay.com/photo/2017/07/23/04/58/cesky-krumlov-2530574_960_720.jpg" />
		
		<img src="https://empire-s3-production.bobvila.com/slides/21736/original/Foolproof-Flowers-Sunflower.jpeg?1591225103" />
	</div><br />
	<div className="textContainer">
		<div className="titleL">
            Lorem ipsum dolor sit amet 
		</div>
		<div className="titleP">
			Lorem ipsum dolor sit amet
		</div>
	</div><br />
	<div className="container">
       <div className="textL">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolorum vero sunt similique ut veniam et ratione qui autem dolores accusantium iure tempore ipsum voluptatem, eligendi, deserunt, adipisci facere sequi?
	   </div>
	   <div className="textP">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe unde autem earum inventore fuga non deserunt, dolorem ullam porro quam mollitia laborum iure! Excepturi, ut sit voluptates modi eos mollitia!
	   </div> 
	</div><br /><br />
	<div className="container">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg" />
		
		<img src="https://media.istockphoto.com/id/1216089289/photo/registered-trademark-concept.jpg?s=612x612&w=0&k=20&c=lcKS4XheSJfg7Y6DUMafgtQ8A0oYJVRLnz_fMKtzfag=" />
	</div><br />
	<div className="textContainer">
		<div className="titleL">
            Lorem ipsum dolor sit amet 
		</div>
		<div className="titleP">
			Lorem ipsum dolor sit amet
		</div>
	</div><br />
	<div className="container">
       <div className="textL">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolorum vero sunt similique ut veniam et ratione qui autem dolores accusantium iure tempore ipsum voluptatem, eligendi, deserunt, adipisci facere sequi?
	   </div>
	   <div className="textP">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe unde autem earum inventore fuga non deserunt, dolorem ullam porro quam mollitia laborum iure! Excepturi, ut sit voluptates modi eos mollitia!
	   </div>
	</div>
    <footer>
          Copyright ?? Tom???? Lauda 3.B
	</footer>
	</div>
      <ProjectItems/>
    </div>
  )
}

export default App
