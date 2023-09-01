function Table({tableData}){
    return(              
        <>                               
        <h2>First Name: {tableData.fname}</h2>
        <h2>Last Name: {tableData.lname}</h2>
        <h2>Email Id: {tableData.eid}</h2>
        
        </>           
    )
}
export default Table;
