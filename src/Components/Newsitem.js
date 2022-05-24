import React from 'react'

export default function Newsitem(props){
        return (
            <div>
                <div className="card shadow-sm" style={ {width: '18rem'}}>
                    <div style={{height:'400px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={props.img} className="card-img-top img-fluid" alt="..." style={{maxHeight:'300px',maxWidth:'90%'}} />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.des}</p>
                    <hr/>
                    <p className= "card-text"><b>Price:</b> {props.price}</p>
                    </div>
                    {/* <span className= "position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1',left: '92%'}}>{this.props.source}
  </span> */}
                </div>
            </div>
        )
}
