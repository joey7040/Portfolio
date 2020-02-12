import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


export default class DoughnutChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['SkateBoarding', 'BasketBall', 'FootBall', 'Golf', 'WeightLifting','Gaming'],
                datasets:[{
                    data:[
                        100,
                        55,
                        45,
                        30,
                        10,
                        60
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
                    <Doughnut
                    data={this.state.chartData}
                    width={80}
                    height={80}
                    options={{
                        title:{
                            display: true,
                            text:"Sports I'm interested in"
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