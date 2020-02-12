import React , {Component} from 'react';
import BarChart from '../Charts/BarChart';
// import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import DoughnutChart from '../Charts/DoughnutChart';
// import RadarChart from '../Charts/RadarChart';
import PolarChart from '../Charts/PolarChart';
import ReactLoading from 'react-loading';



export default class Metrics extends Component{
    state = {
        done: undefined
    }

    componentDidMount(){
        setTimeout(()=>{
          this.setState({
            done : true
          })
        },1200)
      }



    render(){
        return (

            
             
                <div className="container container-fluid mt-3">

                {!this.state.done ? (
               <ReactLoading className="center-load" type={"bars"} color={"black"} />
                 ) : (


                <div>
                    <h3>Metric Data About Me</h3>
                    <div className="row">
                        <div className="col-lg-6 p-4">
                            <DoughnutChart />
                            <PolarChart />
                            
                        </div>
                        <div className="col-lg-6 p-4">
                            <PieChart />
                            <BarChart />
                            {/* <RadarChart /> */}
                            {/* <LineChart /> */}
                        </div>
                    </div>
                </div>

                 )}

                </div>
        )
    }
}