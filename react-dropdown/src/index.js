import React from "react";
import ReactDOM, { render } from "react-dom";

// const App = () => {
//     return (
//         <select>
//             <option value="grape">Grapes</option>
//             <option value="lime">Lime</option>
//             <option selected value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//         </select>
//     );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));

//------------Intro JSX-----------------------

// function formatName(user){
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: "Harry",
//     lastName: "potter"
// }

// function getGreeting(user){
//     if(user){
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }else{
//         return <h1>Hello, Stranger.</h1>;
//     }
// }

// // const name = 'Dharan';

// // const element = (<h1>Hello, {formatName(user)}!</h1>);

// const element1 = React.createElement(
//     "h1",
//     {className: 'greeting'},
//     'Hello, Second!'
// );

//------renders----------
// function tick(){
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>

//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);
//-------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------
//----------components and props-----------

// -- creating component ---
//----by using simple functions
// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>
// }

//----by using ES6 class
// class Welcome extends React.Component {
//     render(){
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// -- rendering component
// const element = <Welcome name = "Dharan"/>;

// --composing components--
// function App(){
//     return(
//         <div>
//             <Welcome name="Sara"/>
//             <Welcome name="Cahal"/>
//             <Welcome name="Edite"/>
//         </div>
//     )
// }

//-------------------------------------------------------------------------------------------------------------------------------
// --Extracting components--

// function formatDate(date) {
//   return date.toLocaleTimeString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64",
//   },
// };

// ReactDOM.render(
//   // element,
//   // element1,
//   // <App/>,
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,

//   document.getElementById("root")
// );
//-------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------
//--------state and lifecycle---------

// function Clock(props){
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

//--converting function to a class
// class Clock extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//         this.setState({comment: "Hello"});
//         this.setState((state,props)=>({
//             counter: state.counter + props.increment
//         }));
//     }

//     componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(),
//         );
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerID);

//     }

//     tick(){
//         this.setState({
//             date: new Date(),
//         });

//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// function tick(){
//     const element = (
//      <Clock date = {new Date()}/>
//     );
//   -----render-----
// }

// function App(){
//     return(
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('root')
//         );

// setInterval(tick,1000);

//-------------------------------------------------------------------------------------------------------------------------------

//-----Handling events-------

// /* <button onClick={activateLasers}>Activate Lasers</button> */}

//----example in function---
// function Form(){
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log("You Clicked Submit")
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// ReactDOM.render(
//     <Form/>,
//     document.getElementById('root')
// )

//---example in ES6-----

// class Toggle extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(prevState=>({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )

//---------------------------------------------------------------------------------------------------------
// //-----------Conditional Rendering-------------

// function UserGreeting(props){
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props){
//     return <h1>Please Sign up.</h1>
// }

// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }
// function LogoutButton(props){
//     return(
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting/>;
//     }else{
//         return <GuestGreeting/>;
//     }

// }

// class LoginControl extends React.Component {

//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick(){
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick(){
//         this.setState({isLoggedIn: false});
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick}/>;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick}/>;

//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}

//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     // <Greeting isLoggedIn={true}/>,
//     <LoginControl/>,
//     document.getElementById('root')
// )

//-------inline if with logical && operator

// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }

// const messages = ['React','Re: React','Re:Re:React','Re:Re:Re:Re:React'];

// ReactDOM.render(
//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('root')
// )

//----------------------------------------------------------------------------------------------------
//--------------Lists and keys-----------------

// function NumberList(props) {
//   const numbers = props.numbers;
//   const todo = ['Meet','talk'];
//   const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//       {number}
//   </li>
//   );
//   const todoItems = todo.map((todo,index)=>
//     <li key={index}>
//         {todo.text}
//     </li>
//   )
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// // const doubled = numbers.map((number) => number * 2);
// // console.log(doubled);

// ReactDOM.render(
//   // doubled,
// //   <ul>{listItems}</ul>,
//   <NumberList numbers={numbers}/>,
//   document.getElementById("root")
// );

// function Blog(props) {
//   const sideBar = (
//     <ul>
//       {props.posts.map((post) => 
//         <li key={post.id}>{post.title}</li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) => 
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sideBar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: "hello world", content: "welcome to learning react!" },
//   { id: 2, title: "Initial", content: "You can install react from npm" },
//   {
//     id: 3,
//     title: "Test",
//     content: "You can test API by using npm start in terminal",
//   },
// ];
// ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));


//---------------------------------------------------------------------------------------------------------
//--------------------Forms----------------------

// class NameForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.name = {value:'Dharan'}
//         this.essay = {value: 'please wite an essay about your fav DOM element'};
//         this.fruit = {value: 'coconut'}
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e){
//         this.setState({value:e.target.value});
//         // this.setState({value:e.target.name.value});
//         // this.setState({value:e.target.essay.value});
//         // this.setState({value:e.target.fruit.value});
//     }

//     handleSubmit(e){
//         alert('A name was submitted ' + this.name.value);
//         alert('A essay was submitted ' + this.essay.value);
//         alert('Fruit was selected successfully:' +this.fruit.value);
//         e.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.name.value} onChange={this.handleChange}/>
//                 </label>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <label>
//                     Essay:
//                     <textarea type="text" value={this.essay.value} onChange={this.handleChange}/>
//                 </label>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <label>
//                     Pick you favorite fruit:
//                     <select value={this.fruit.value} onChange={this.handleChange}>
//                        <option value="lime">Lime</option>
//                        <option value="grapefruit">Grapefruit</option>
//                        <option value="mango">Mango</option>
//                        <option selected value="coconut">Coconut</option>
//                     </select>
//                 </label>
               
//                 <input type="submit" value="submit"/>
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <NameForm/>,
//     document.getElementById('root')
// )


// class Reservation extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isGoing: true,
//         numberOfGuests: 2
//       };
  
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
  
//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }
  
//     render() {
//       return (
//         <form>
//           <label>
//             Is going:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//           </label>
//           <br />
//           <label>
//             Number of guests:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange} />
//           </label>
//         </form>
//       );
//     }
//   }

//   ReactDOM.render(
//       <Reservation/>,
//       document.getElementById('root')
//   )

//------------------------------------------------------------------------------------

// function BoilingVerdict(props){
//     if(props.celsius >= 100){
//         return <p>The water would boil.</p>;
//     }
//     return <p> The water not boil.</p>
// }

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''};
    }
    handleChange(e){
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter the temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
                {/* <BoilingVerdict celsius={parseFloat(temperature)}/> */}
            </fieldset>
        )
    }
}

class Calculator extends React.Component{
    render() {
        return(
            <div>
            <temperatureInput scale="c"/>
            <temperatureInput scale="f"/>
        </div>
        )
    }
}

ReactDOM.render(
    <Calculator/>,
    // <TemperatureInput/>,
    document.getElementById('root')
)








