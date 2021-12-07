import React, { Component } from 'react'
import './App.css';
import HoverHoc from './components/HoverHoc';
import CounterHoc from './components/CounterHoc';
import MainRender from './components/MainRender';
import CounterRender from './components/CounterRender';
import HoverRender from './components/HoverRender';

export class App extends Component {
  render() {
    return (
      <div>
           {/* For Hoc */}
       
        {/* <CounterHoc name='Ashish'/>
        <HoverHoc/> */}

              {/* For RenderProp */}
         <MainRender
					render={(count, incrementCount) =>
					<CounterRender
						count={count}
						incrementCount={incrementCount}>
					</CounterRender>}>
				</MainRender>
				<MainRender
					render={(count, incrementCount) =>
					<HoverRender
						count={count}
						incrementCount={incrementCount}>
					</HoverRender>}>
				</MainRender> 
      </div>
    )
  }
}

export default App

