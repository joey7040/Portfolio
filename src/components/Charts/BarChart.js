import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


export default class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Angular', 'React', 'Sencha', 'Vue', 'Webix', 'BackBone'],
                datasets:[{
                    barPercentage: 1,
                    data:[
                        80,
                        100,
                        30,
                        80,
                        70,
                        50,
                        0
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
                    <Bar
                    data={this.state.chartData}
                    width={100}
                    height={80}
                    options={{
                        title:{
                            display: true,
                            text:'JavaScript Framework Knowledge'
                        },
                        legend:{
                            display: false,
                        }
                    }}
                    ></Bar>
                </div>
        )
    }
}