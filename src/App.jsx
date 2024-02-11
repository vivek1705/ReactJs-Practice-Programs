import MyButton from "./MyButton";
import DynamicComponent from "./DynamicComponent";
import ResuableComponent from "./ResuableComponent";
import Fragments from "./Fragments";
import Lists from "./Lists";
import Lists2 from "./Lists2";
import Lists3 from "./Lists3";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import ParentComponent from "./Props/ParentComponent";
import UserProfile_parent from "./Props/UserProfile_parent";
import ParentClass from "./Props/ParentClass";
import Counter from "./state/Counter";
import CounterFunction from "./state/CounterFunction";
import ItemListClass from "./state/ItemListClass";
import ItemListFunction from "./state/ItemListFunction";
import RouterExample from "./RouterEx/RouterExample";


import "./App.css";

function App() {

  return (
  <>
    <div>
      <h1>Hello</h1>
      <MyButton></MyButton>

      <DynamicComponent></DynamicComponent>
      </div>
    <div className="rc">
      <ResuableComponent></ResuableComponent>
      <ResuableComponent></ResuableComponent>
      <ResuableComponent></ResuableComponent>
      <ResuableComponent></ResuableComponent>  

    </div>

    <div className="fragment">
        <Fragments></Fragments>
    </div>
      
    <div className="lists">
      <Lists></Lists>
    </div>

    <div className="lists">
      <Lists2></Lists2>
    </div>

    <div className="lists">
      <Lists3></Lists3>
    </div>

    <div className="fc">
    <FunctionalComponent></FunctionalComponent>
    </div>
    
    <div className="cc">
      <ClassComponent></ClassComponent>
    </div>

    <div className="pc">
      <ParentComponent></ParentComponent>
    </div>

    <div className="userprofile">
      <UserProfile_parent></UserProfile_parent>
    </div>

    <div className="parentclass">
      <ParentClass></ParentClass>
    </div>

    <div className="counter">
      <Counter></Counter>
    </div>

    <div className="counter">
      <CounterFunction></CounterFunction>
    </div>

    <div className="state">
    <ItemListClass></ItemListClass>
    <ItemListFunction></ItemListFunction>
    </div>

    <div>
      <RouterExample></RouterExample>
    </div>

    </>
  );

}

export default App;
