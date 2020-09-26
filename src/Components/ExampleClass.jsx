//* Class Component

import React, { Component } from 'react'


class ExampleClass extends Component {
    //ketika menggunakan class 
    constructor() {
        super()

        this.state = {
            firstname: '',
            lastname: '',
            name: ''
        }
    }

    //menargetkan form input firstname dan lastname
    changeHandler = (e) => {
        this.setState({
            //merubah isi this.state menjadi input yang kita isi nantinya
            //[e.target.name] -> pada name input firstname & lastname 
            //e.target.value -> pada value input firstname & lastname 
            [e.target.name]: e.target.value
        })
    }

    //ketika tombol submit ditekan
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            name: `${this.state.firstname} ${this.state.lastname}`

        })
        //setelah submit kita ingin kosongkan form
        this.state.firstname = ''
        this.state.lastname = ''

    }

    render() {
        // diambil dari submitHandler->this.setState utk dirender
        const { name } = this.state
        return (
            <div className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Learn React JS</div>
                                <div className="card-body">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="mb-4">
                                            <label htmlFor="firstname" className="form-label">Firstname</label>
                                            <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id="firstname" className="form-control" />

                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="lastname" className="form-label">Lastname</label>
                                            <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id="lastname" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Show</button>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    {/*  {name ? name : '. . .'} => ketika name ada cetak ketika tidak ada maka cetak '. . .' */}
                  My name is {name ? name : '. . .'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExampleClass