import React, { Component } from 'react';
import Card from './Card';
import { MuiThemeProvider } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.renderChip = this.renderChip.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        if(!this.props.companies.length) {
            this.props.getCompanies();
        }
        if(!this.props.tags.length) {
            this.props.getTags();
        }
    }

    onClick(e) {
        e.preventDefault();
        console.log('label', e.target.innerHTML);
        this.props.setFilter(e.target.innerHTML);
    }

    renderChip(data, index) {
        return (
            <MuiThemeProvider key={index}>
                <Chip key={index} style={{margin: 3}} 
                    onClick={this.onClick}
                    backgroundColor="#0078D7">
                    {data.label}
                </Chip>
            </MuiThemeProvider >
        );
    }

    render() {
        const mytags = [];
        this.props.tags.map( (tag, i) => {
            mytags.push({key: i, label: tag["_id"]});
        });
        console.log('this.props', this.props);
        return (
            <main id="companies">
                <div className="mdc-layout-grid">
                    {this.props.companies && this.props.companies.length ? 
                    <div>
                        <br/>
                        <div style={{display: 'flex',flexWrap: 'wrap'}}>
                            {mytags.map((tag, index) => this.renderChip(tag, index))}
                        </div>
                        <br/>
                        <div className="mdc-layout-grid__inner">
                            {
                                this.props.companies.map((company, index) => {
                                    return (
                                        <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
                                            <Card company={company} slug={company.slug} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : <div className="loading">Loading...</div>
                    }
                </div>
            </main>
        );
    }
}

export default Companies;