import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


export default class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Orlando', 'Tampa'],
                datasets:[{
                    label:'Population',
                    data:[
                        18,
                        7,
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                    ]
                }]
            }
        }
        
    }


    render(){
        return (
                <div className='chart'>
                    <Pie
                    data={this.state.chartData}
                    width={80}
                    height={80}
                    options={{
                        title:{
                            display: true,
                            text:"Years per city I've lived in"
                        },
                        legend:{
                            display: true,
                            position:'right',
                        }
                    }}
                    />
                </div>
        )
    }
}