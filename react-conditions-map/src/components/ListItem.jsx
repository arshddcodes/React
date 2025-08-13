function ListItem(){
    return (
        <div>
            {product.map( ()=>(
                <h1>hello</h1>
            ))}
        </div>  
    );
}

const product = [
    {id : 'deskt470', name : 'lenovo'},
    {id : 'prin546', name : 'priner'},
    {id : 'deskt470', name : 'lenovo'}
]

export default ListItem;