import React from React

function Accordion (props){

return(
<div>
    <div className='accordion_section'></div>
    <button className="accordion">

    <p className="accordion_title">{props.title}</p>  
    </button>
   
    <div className="accordion_content">
    <div className="accordion_text"  dangerouslySetInnerHTML={{ ___html: props.content }}/></div>
   
</div>

)


}



export default Accordion