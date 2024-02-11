//implement a functional component called person that receive a name prop and display hello[name]

function functionalComponent({name}){
    
    name = 'vivek';

    return(
        <div>hello {name}! i am from functional component</div>
    )
}

export default functionalComponent;