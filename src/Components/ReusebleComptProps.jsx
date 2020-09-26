// Reuseble component dan Props
import React from 'react'
import Card from './Components/Card'

function ReusebleComptProps() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>The Posts</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        {/* props */}
                        <Card contact={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "First Post",
                            published: "07 Feb, 2019"
                        }}
                        />
                    </div>
                    <div className="col-md-4">
                        {/* props */}
                        <Card contact={{
                            imageUrl: "http://placekitten.com/300/200",
                            title: "Second Post",
                            published: "08 Feb, 2019"
                        }}
                        />
                    </div>
                    <div className="col-md-4">
                        {/* props */}
                        <Card contact={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "Third Post",
                            published: "09 Feb, 2019"
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReusebleComptProps;