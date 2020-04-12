import React, {Component} from 'react';
import {Polarnut, Polar} from 'react-chartjs-2';


export default class PolarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Java', 'TypeScript', 'JavaScript', 'Python', 'GoLang', 'PHP'],
                datasets:[{
                    label:'Population',
                    data:[
                        50,
                        80,
                        100,
                        80,
                        70,
                        30,
                        0
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(105, 132, 255, 0.6)',
                        'rgba(0, 255, 0, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ]
                }]
            }
        }
        
    }


    render(){
        return (
                <div className='chart'>
                    <Polar
                    data={this.state.chartData}
                    width={80}
                    height={80}
                    options={{
                        title:{
                            display: true,
                            text:'Programming Languages I know'
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