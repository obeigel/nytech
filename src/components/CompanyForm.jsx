import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import ChipInput from 'material-ui-chip-input';
import Linkify from 'react-linkify';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

class CompanyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type || "",
            tags: props.tags || [],
            slug: props.slug || "",
            joblinks: props.joblinks || [],
            name: props.name || "",
            location: props.location || "",
            describtion: props.describtion || "",
            joblink: "" 
        }

        this.handleAddTag = this.handleAddTag.bind(this);
        this.handleDeleteTag = this.handleDeleteTag.bind(this);
        this.handleAddLink = this.handleAddLink.bind(this);
        this.handleDeleteLink = this.handleDeleteLink.bind(this);

        this.handleDeleteCompany = this.handleDeleteCompany.bind(this);
        this.handleEditCompany = this.handleEditCompany.bind(this);
        this.handleSubmitCompany = this.handleSubmitCompany.bind(this);

        this.handleChangeJobLink = this.handleChangeJobLink.bind(this);
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
        this.handleChangeCompanyLocation = this.handleChangeCompanyLocation.bind(this);
        this.handleChangeCompanyDescribtion = this.handleChangeCompanyDescribtion.bind(this);
    }

    handleAddTag(key) {
        this.setState({tags: [...this.state.tags, key]});
        console.log('handleAddTag:', this.state.tags);
    }
    
    handleDeleteTag(key, index) {
        let tags = this.state.tags
        tags.splice(index, 1);
        this.setState({tags});
        console.log('handleDeleteTag:', this.state.tags);
    }

    handleAddLink(e) {
        e.preventDefault();
        if (this.state.joblinks && this.state.joblinks.length)
            this.setState({joblinks: [...this.state.joblinks, this.state.joblink]});
        else
            this.setState({joblinks: [this.state.joblink]});
    }
    
    handleDeleteLink (e){
        e.preventDefault();
        console.log('handleDeleteLink id', e.target.id);
        let joblinks = this.state.joblinks;
        joblinks.splice(e.target.id, 1);
        this.setState({joblinks});
    };

    handleChangeJobLink(e) {
        e.preventDefault();
        this.setState({joblink: e.target.value});
    }

    handleChangeCompanyName(e) {
        e.preventDefault();
        console.log('Company name', e.target.value);
        this.setState({name: e.target.value});
    }
    
    handleChangeCompanyLocation(e) {
        e.preventDefault();
        console.log('Company location', e.target.value);
        this.setState({location: e.target.value});
    }

    handleChangeCompanyDescribtion(e) {
        e.preventDefault();
        console.log('Company describtion', e.target.value);
        this.setState({describtion: e.target.value});
    }

    handleEditCompany(e) {
        e.preventDefault();
        const {name, describtion, joblinks, location, tags, slug} = this.state;
        console.log('handleEditCompany', name, describtion, joblinks, location, tags, slug);
        this.props.onEdit({name, describtion, joblinks, location, tags, slug});
    }
    
    handleDeleteCompany(e) {
        e.preventDefault();
        const slug = this.props.slug;
        console.log('handleDeleteCompany', slug);
        this.props.onDelete({slug});
    }

    handleSubmitCompany(e) {
        e.preventDefault();
        const {name, describtion, joblinks, location, tags, slug} = this.state;
        console.log('handleSubmitCompany', name, describtion, joblinks, location, tags, slug);
        this.props.onAdd({name, describtion, joblinks, location, tags, slug});
    }

    render() {
        return (
            <div className="my-form">
                <MuiThemeProvider>
                <div className="mdc-card">
                    <TextField hintText="Company Name" defaultValue={this.state.name}
                        onChange={this.handleChangeCompanyName} />
                    <br />
                    <TextField hintText="Company Location" defaultValue={this.state.location}
                        onChange={this.handleChangeCompanyLocation} />
                    <br />
                    <TextField
                        hintText="Company/RnD Profile" multiLine={true} rows={4} rowsMax={10} fullWidth={true}
                        defaultValue={this.state.describtion} onChange={this.handleChangeCompanyDescribtion} />
                    <br />                
                    <ChipInput value={this.state.tags} floatingLabelText="Skills" fullWidth = "true"
                        onRequestAdd={(chip) => this.handleAddTag(chip)}
                        onRequestDelete={(chip, index) => this.handleDeleteTag(chip, index)} />
                    <br />
                    <div >
                        <label>Job Links</label>
                        <br />
                        {this.state.joblinks && this.state.joblinks.map((joblink, key) => {
                            return (
                                <div key={key} className="joblinkAdd">
                                    <Linkify className="joblink">{joblink}</Linkify>
                                    <FloatingActionButton mini={true} style={{margin:20}} id={key}>
                                        <ContentRemove id={key} onClick={this.handleDeleteLink}/>
                                    </FloatingActionButton>  
                                </div>
                            );
                        })}
                        <br /><br />
                        <div className="joblinkAdd">
                            <TextField hintText="Link" onChange={this.handleChangeJobLink} />
                            <FloatingActionButton mini={true} style={{margin:20}}>
                                <ContentAdd onClick={this.handleAddLink}/>
                            </FloatingActionButton>
                        </div>
                    </div>
                    <br /><br />
                    {this.props.type !== "new" ?
                        <div className="buttons">
                            <div className="mdc-button button-edit" onClick={this.handleEditCompany}>Edit</div>
                            <div className="mdc-button button-delete" onClick={this.handleDeleteCompany}>Delete</div>
                        </div>
                        :
                        <div className="mdc-button button-edit" onClick={this.handleSubmitCompany} >Submit</div>
                    }
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default CompanyForm;