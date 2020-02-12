import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';


export default class RadarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'springfield', 'lowell', 'cambridge', 'new bedford'],
                datasets:[{
                    label:'Population',
                    data:[
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(105, 132, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                }]
            }
        }
        
    }


    render(){
        return (
                <div className='chart'>
                    <Radar
                    data={this.state.chartData}
                    width={80}
                    height={80}
                    options={{
                        title:{
                            display: true,
                            text:'Largest cities in mass'
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