import React,{useRef,useState} from 'react'

// chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

// register charts
ChartJS.register(ArcElement, Tooltip, Legend);

// icons
import { RxCaretDown } from "react-icons/rx";

// motion
import { motion } from "framer-motion";

// components
import Wrapper from '../Wrapper/Wrapper';

const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        labels: {},
      },
    },
    scales: {
        x: {
            grid: {
                display: false  
            }
        },
        y: {
            grid: {
                display: false 
            }
        }
    }
};


const LineChart = () => {
    const [isOpen, setIsopen] = useState<boolean>(false);
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

    const chartRef = useRef(null);

  const items = ['7 days','30 days','3 months','6 months','12 months']

  const containerVariants = {
    hidden:{
        height:0,
        opacity:0,
        transition:{
            when:'afterChildren'
        }
    },
    visible:{
        height:'auto',
        opacity:1,
        transition:{
            when:'beforeChildren',
            staggerChildren:0.1
        }
    }
  }

  const childVariants = {
     hidden:{
        opacity:0,
        y:20,
     },
     visible:{
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            stiffness:100
         }
     } 
  }

  

    const data ={
        labels,
        datasets: [
            {
              label: "Subcribers",
              data: [33, 53, 85, 41, 44, 65,40,30,25,60,90,75],
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              tension:0.15
            },
          ]
      }

  return (
    <Wrapper>
            {/* heading */}
          <div className="flex items-center justify-between w-full mb-4">
            <h4 className="text xl">Subscribers</h4>

            <div className="relative">
              <button
                onClick={() => setIsopen(!isOpen)}
                className="flex items-center gap-x-2 px-4 py-2 rounded-md dark:border dark:border-gray-500 "
              >
                30 days
                <RxCaretDown className=" text-xl dark:text-white" />
              </button>

                {/* dropdown */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isOpen ? 'visible' :'hidden'}
                id="dropdown"
                className="absolute right-1 mt-2 z-10 overflow-hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-dark-100"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                    {
                        items.map((item,index)=>{
                            return  <motion.li variants={childVariants} key={index} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-50 hover:cursor-pointer dark:hover:text-white">
                            {item}
                          </motion.li>
                        })
                    }
            
                </ul>
              </motion.div>
                      {/* dropdown */}
            </div>
          </div>
          {/* heading */}

          {/* chart */}
          <div className="w-full">
             <div className="h-96 w-full">
                 <Line ref={chartRef} data={data} options={options}/>
             </div>
          </div>
             {/* chart */}
        </Wrapper>
  )
}

export default LineChart