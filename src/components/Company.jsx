import React, { Component } from 'react';
import CompanyForm from './CompanyForm';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: "",
            company: null
        }
    }

    componentWillMount() {
        if(this.props.companies.length === 0) {
            this.props.getCompanies();
        }
        const slug = this.props.match.params.slug;
        const company = this.props.companies.find(c => c.slug === slug);
        this.setState({company, slug})
        console.log('Company componentWillMount', company);
    }

    render() {
        const company = this.state.company;
        return (
            <div className="my-form">
            {company !== undefined ?
                <CompanyForm name={company.name} location={company.location} slug={company.slug}
                    describtion={company.describtion} tags={company.tags} joblinks={company.joblinks} 
                    onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
                :
                <div>null</div>
            }
            </div>
        );
    }
}

export default Company;