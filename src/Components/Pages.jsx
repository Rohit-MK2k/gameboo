import React from 'react'

function Pages({icon,name,page,pageText,alert}) {
  if(alert === 0){
    return (
      <>  
          <button className= {page}>
              <i className="page-icon"><img src={icon} alt="" /></i><p className={pageText}>{name}</p>
          </button>
      
      </>
    )
  }
  else{
    return (
      <>  
          <button className= {page}>
              <i className="page-icon"><img src={icon} alt="" /></i><p className={pageText}>{name}</p>  <div className="alert">{alert}</div>
          </button>
      
      </>
    )
  }
}

export default Pages