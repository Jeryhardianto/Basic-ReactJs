import React from 'react'

function Card(props) {
    const { imageUrl, title, published } = props.contact
    return (
        <div className="card">
            <img src={imageUrl} alt="cat" className="card-img-top" />
            <div className="card-body">
                <h4>{title}</h4>
                <small className="text-muted">Published {published}
                </small>
            </div>
        </div>
    )
}
export default Card