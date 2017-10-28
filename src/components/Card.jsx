import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Chip from 'material-ui/Chip';
import { MuiThemeProvider } from 'material-ui/styles';

class Card extends Component { 
    constructor (props) {
        super(props);
        this.renderChip = this.renderChip.bind(this);
    }

    renderChip(data) {
        return (
          <Chip key={data.key} style={{margin: 3}} backgroundColor={this.props.backgroundColor}>
            {data.label}
          </Chip>
        );
    }

    render() {
        let newtags = this.props.company.tags.map((tag,i) => {
            return {key: i, label: tag} ;
        });
        return (
            <div className="mdc-card">
                <div className="mdc-card__vertical-block">
                    <img src={`/img/${this.props.company.slug}.png`} className="mdc-card__media-item" 
                        alt={this.props.company.name} />

                    <section className="mdc-card__primary">
                        <p className="mdc-card__subtitle">{this.props.company.location}</p>
                        <MuiThemeProvider>
                            <div style={{display: 'flex',flexWrap: 'wrap'}}>
                                {newtags.map(this.renderChip)}
                            </div>
                        </MuiThemeProvider>
                    </section>
                </div>

                <section className="mdc-card__actions">
                    <NavLink to={`/companies/${this.props.company.slug}`} className="mdc-button mdc-card__action" >More</NavLink>
                </section>
            </div>
        )
    }
}

export default Card;