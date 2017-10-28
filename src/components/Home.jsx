import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { MuiThemeProvider } from 'material-ui/styles';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.tags || !this.props.tags.length) {
            this.props.getTags();
        }
    }

    render() {
        let labels = [];
        let data = [];
        this.props.tags.map( (tag, i) => {
            labels.push(tag["_id"]);
            data.push(tag["count"]);
        });
        data.push(0);
        let chartData = {
            labels,
            datasets: [
                {
                    label: 'Job Skills Chart',
                    backgroundColor: '#0078D7',
                    borderColor: '#0063B1',
                    borderWidth: 1,
                    hoverBackgroundColor: '#FF8C00',
                    hoverBorderColor: '#F7630C',
                    data
                }
            ]
        }
        
        return (
            <div className="my-form">
                {(this.props.tags && this.props.tags.length !== 0) ? 
                    <MuiThemeProvider>
                        <div className="mdc-card">
                            <div className="chart-bar">
                                <Bar data={chartData} height={500} options={{maintainAspectRatio: false}}/>
                            </div>
                        </div>
                    </MuiThemeProvider>
                    :
                    <div>null</div>
                }
            </div>
        );
    }
}

export default Home;