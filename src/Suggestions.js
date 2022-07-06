import './Suggestions.css';
import { BsSearch } from "react-icons/bs";
export function Suggestions(props){

    return(
        
        <div className="suggestions">
            <div className='popular-suggestions'>Popular Suggestions</div>
            <div>
                {props.suggestions.suggestions.map((suggestion)=>(
                <div className='suggestion-item'>
                    <div className='suggestion-icon'><BsSearch /></div>
                    <div className='suggestion'>{suggestion}</div>
                </div>
            ))}
            </div>
        </div>
    )

}