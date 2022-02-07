import React from 'react'

function Gif(props) {
    return (
        <React.Fragment>
            <div className='col-lg-3 col-md-6 mb-4'>
                <div className="card h-100">
                    <img className="card-img-top" src={props.contenido} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{props.titulo}</h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Gif