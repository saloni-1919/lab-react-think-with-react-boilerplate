const cont = document.getElementById('reactcont');
ReactDOM.render("Hello! Welcome to React",cont);

const Cont = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
const cont1 = document.getElementById('reactcont');
ReactDOM.render(React.createElement(Cont),cont);

class ReactCont extends React.Component{
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }

  }
  const cont2 = document.getElementById('reactcont');
  ReactDOM.render(React.createElement(ReactCont),cont);