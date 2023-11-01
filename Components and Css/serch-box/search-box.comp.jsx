
import './searchbox.Style.css' ;

const Searchbox=({placeholder,onchangehandler})=> (
        <input className='search-box'
         type='search'
         placeholder={placeholder}
         onChange={onchangehandler}  
         />
        );
export default Searchbox;