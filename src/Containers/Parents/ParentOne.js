import React from 'react';
import Inc from '../../Components/Childrens/ChildrenOne'


class IncCount extends React.Component{
    state ={

        counter:0,
        counters:0,
        counters1:0,
        counters2:0,
        counters3:0
        
        }
handle = () =>{
    console.log('Fired handle!');
this.setState({
...this.state,
counter: this.state.counter+1

}
);
}

handle1 = () =>{
    console.log('Fired hanlde1!');
this.setState({
...this.state,
counters: this.state.counters+1
}
);
}

handle2 = () => {
    console.log('Fired hanlde2!');
this.setState({
...this.state,
counters1 :this.state.counters1+1
    
});
}

handle3 = () =>{
    console.log('Fired hanlde3!');
this.setState({
...this.state,
counters2: this.state.counters2+1

});
}

handle4 = () => {
    console.log('Fired hanlde4!');
    this.setState({
    ...this.state,
    counters3 :this.state.counters3+1
    });
    }

    handle5 = ()=>{
        console.log('Sammo is Love!');


    }

render(){

return(
       <div>
      {this.state.counter}
      {this.state.counters}
      {this.state.counters1}
      {this.state.counters2}
      {this.state.counters3}
     
    
        <Inc
        incc ={this.handle.bind(this)}
        incc1 ={this.handle1.bind(this)}
        incc2 ={this.handle2.bind(this)}
        incc3 ={this.handle3.bind(this)}
        incc4 ={this.handle4.bind(this)}
        incc5 ={this.handle5.bind(this)}
       />
    </div>
    
)

}
}
export default  IncCount;