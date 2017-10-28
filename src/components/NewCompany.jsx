import React, { Component } from 'react';
import CompanyForm from './CompanyForm';

class NewCompany extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {        
        return (
            <div className="my-form">
                <CompanyForm type="new" onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default NewCompany;