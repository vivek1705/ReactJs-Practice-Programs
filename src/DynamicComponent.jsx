function DynamicComponent(){

    let myName = "vivek patil"; 

    let fullName = () =>{                   // method create
        return 'vivek vishwanath patil';        
    }

    let number = 10;
    return(
        <div>
             <h2>hello i am {myName} my full name is {fullName()}</h2>
             <p>number is: {number}</p>
        </div>
      
        
    );
}

export default DynamicComponent;