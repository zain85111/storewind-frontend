import {
  CurrencyDollarIcon, ChartBarIcon,TicketIcon,ClipboardListIcon, ArrowUpIcon,ArrowDownIcon, DownloadIcon 
} from "@heroicons/react/outline";

import { Tab  } from "@headlessui/react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
    LineElement,
    BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Chart,Bar } from 'react-chartjs-2';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


const lineTrendDataLabels = ['', '', ''];
const lineTrendDataOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display:false,
        },
    },
    scales: {
        x: {
            grid: {
                display:false,
            },
            display:false,
        },
        y: {
            grid: {
                display:false,
            },
            display:false,
        },
    },

    maintainAspectRatio: true, 
  
};
const lineTrendData = {
    labels: lineTrendDataLabels,
    datasets: [{
        label: {
            display:false,
        },
        data: [95, 59, 80,],
        fill: 'origin',
        borderColor: 'rgb(725, 192, 192)',
        tension: 0.1
    }]
};

const incomeExpanseDataLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const incomeExpanseDataOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            align: 'end',
            labels: {
            usePointStyle: true,
            },
        },
        

    },
    maintainAspectRatio: true, 
    scales: {
        x: {
            grid: {
                display:false,
            },
        },


    }
};
const incomeExpanseData = {
    labels :incomeExpanseDataLabels ,
    datasets: [


        {
            label: 'Income',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill:'start',
            borderColor: 'rgb(9, 189, 60)',
            backgroundColor: 'rgb(9, 189, 60,0.8)',
        },
        {
            label: 'Expanses',
            data: [56, 55, 40, 65, 59, 80, 81],
            fill:'start',
            borderColor: 'rgb(253, 83, 83)',
            backgroundColor: 'rgba(253, 83, 83,0.8)',
        },
    ],
};


export const DashboardContent = () => {


    const topProducts = [
        {
            id: 223,
            name: 'Knife - Black',
            imgUrl: '',
            brand: 'Mac',
            category: 'kitchen',
            price: 23.12,
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
            
        },
        {
            id: 231,
            name: 'Knife - Black',
            imgUrl: '',
            brand: 'Mac',
            category: 'kitchen',
            price: 23.12,
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
            
        },
        {
            id: 3423,
            name: 'Knife - Black',
            imgUrl: '',
            brand: 'Mac',
            category: 'kitchen',
            price: 23.12,
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
            
        },
        {
            id: 2103,
            name: 'Knife - Black',
            imgUrl: '',
            brand: 'Mac',
            category: 'kitchen',
            price: 23.12,
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
            
        },
        {
            id: 293,
            name: 'Knife - Black',
            imgUrl: '',
            brand: 'Mac',
            category: 'kitchen',
            price: 23.12,
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
            
        },
    ]
    
    const salesData = [
        {
            id: 1242,
            date: '21-4-2022',
            revenue: 4293.00,
            noOfOrders: 242,
            margin: true,
        },
        {
            id: 1224,
            date: '21-4-2022',
            revenue: 4293.00,
            noOfOrders: 242,
            margin: false,
        },
        {
            id: 12144,
            date: '21-4-2022',
            revenue: 4293.00,
            noOfOrders: 242,
            margin: true,
        },
        {
            id: 12914,
            date: '21-4-2022',
            revenue: 4293.00,
            noOfOrders: 242,
            margin: true,
        },
        {
            id: 1204,
            date: '21-4-2022',
            revenue: 4293.00,
            noOfOrders: 242,
            margin: false,
        },
    ]

    const durations = ['Daily', 'Weekly', 'Monthly']

    return (
        <div className="p-5 space-y-6 ">
            {/* Top Cards  */}
            <div className="flex justify-between space-x-4 items-center ">
                <div className="bg-white w-72 h-44 rounded-xl flex flex-col justify-between">
                    <div className="flex items-center space-x-5 px-8 pt-4 ">
                        <ChartBarIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">248K</p>
                            <p className="text-gray-500 text-sm">Total Sales</p>
                        </div>
                    </div>
                    <div className="">
                        <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
                    </div>
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <CurrencyDollarIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">133K</p>
                            <p className="text-gray-500 text-sm">Total Revenue</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <TicketIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">6K</p>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <ClipboardListIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">32K</p>
                            <p className="text-gray-500 text-sm">Total Products Sold</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Products  */}
                {topProducts ? (
                    <div className="space-y-10 p-4 bg-white rounded-lg h-fit">
                        <div className="flex justify-between items-center h-14 ">
                            <div className="flex flex-col  items-start">
                                <p className="font-semibold ">Transaction Overview</p>
                                <p className="text-xs">Income & Expanse summary of the total sales.</p>
                            </div>
                            <Link href={"/topProducts/download"}>
                                <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-2 border-green-800 bg-white active:text-green-600">
                                <span>
                                    <DownloadIcon className="h-5 w-5 text-green-800" />
                                </span>
                                <p>Download Report</p>
                                </button>
                            </Link>

                        </div>
                    <div className="">
                        <Bar height={100} width={300} options={incomeExpanseDataOptions} data={incomeExpanseData} />
                        
                    </div>
                        
                    </div>
                ) : (
                    <></>
                )}  
            
            {/* Summary of Stats Section  */}
            <div className="flex justify-between space-x-4">
                {/* Sales Stats */}
                {topProducts ? (
                    <div className="space-y-4 w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                        <div className="p-4 ">
                            <Tab.Group>
                                <div className="flex justify-between items-center h-14 ">
                                    <div className="flex flex-col  items-start">
                                        <p className="font-semibold ">Sales Statistics</p>
                                        <p className="text-xs">Daily Sales Statistics of the Store.</p>
                                    </div>
                                    <Tab.List className="flex p-1 space-x-1 w-1/2 bg-gray-100 rounded-xl">
                                        {durations.map((duration,idx) => (
                                            <Tab
                                            key={idx}
                                            className={({ selected }) =>
                                                classNames(
                                                'w-full py-2 text-xs leading-5 font-medium text-white rounded-lg',
                                                'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                                                selected
                                                    ? 'bg-green-700 shadow'
                                                    : 'text-green-700 hover:bg-white/[0.12] '
                                                )
                                            }
                                            >
                                            {duration}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="">
                                    {Object.values(durations).map((posts, idx) => (
                                        <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            '',
                                            
                                        )}
                                        >
                                            <table className="hover:border-collapse w-full   ">
                                                <thead >
                                                    <tr className="h-16 text-sm">
                                                        <th>Trend</th>
                                                        <th>Date</th>
                                                        <th>Revenue</th>
                                                        <th>No. Of Orders</th>
                                                        <th>Margin</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                {salesData.slice(0, 5).map((item, i) => (
                                                    <tr
                                                    className="h-14 hover:bg-gray-100  text-xs "
                                                    key={item.id}
                                                    >
                                                        <td className="">
                                                            {
                                                                item.margin ? (

                                                                    <div className="relative left-5 border-2 border-green-600 h-10 w-10 flex justify-center items-center rounded-full border-t-0">
                                                                        <ArrowUpIcon className="w-5 h-5 text-green-600"/>
                                                                    </div>
                                                                ):(

                                                                    <div className="relative left-5 border-2 border-red-600 h-10 w-10 flex justify-center items-center rounded-full border-b-0">
                                                                        <ArrowDownIcon className="w-5 h-5 text-red-600"/>
                                                                    </div>
                                                                )
                                                            }
                                                        </td>
                                                        
                                                        <td >{item.date}</td>
                                                        <td>{item.revenue}</td>
                                                        <td>{item.noOfOrders}</td>
                                                        <td>
                                                            {
                                                                item.margin ? (
                                                                    <p className="font-semibold text-green-600">Increased</p>
                                                                ) : (
                                                                    <p className="font-semibold text-red-600">Decreased</p>
                                                                )
                                                            }
                                                        </td>
                                                        
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                ) : (
                    <></>
                )}  
                
                {/* Top Products  */}
                {topProducts ? (
                    <div className="space-y-4 w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                        <div className="p-4 ">
                            <Tab.Group>
                                <div className="flex justify-between items-center h-14 ">
                                    <div className="flex flex-col  items-start">
                                        <p className="font-semibold ">Top Prodcuts</p>
                                        <p className="text-xs">Summary of top products sales.</p>
                                    </div>
                                    <Tab.List className="flex p-1 space-x-1 w-1/2 bg-gray-100 rounded-xl">
                                        {durations.map((duration,idx) => (
                                            <Tab
                                            key={idx}
                                            className={({ selected }) =>
                                                classNames(
                                                'w-full py-2 text-xs leading-5 font-medium text-white rounded-lg',
                                                'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                                                selected
                                                    ? 'bg-green-700 shadow'
                                                    : 'text-green-700 hover:bg-white/[0.12] '
                                                )
                                            }
                                            >
                                            {duration}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="">
                                    {Object.values(durations).map((posts, idx) => (
                                        <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            '',
                                            
                                        )}
                                        >
                                        <table className="hover:border-collapse w-full   ">
                                            <thead >
                                                <tr className="h-16 text-sm">
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Brand</th>
                                                    <th>Category</th>
                                                    <th>Items Sold</th>
                                                    <th>Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                            {topProducts.slice(0, 5).map((item, i) => (
                                                <tr
                                                className="h-14 hover:bg-gray-100  text-xs "
                                                key={item.id}
                                                >
                                                    <td className="align-middle pl-4">
                                                        <div className="h-7 w-7 bg-gray-400 items-center flex justify-center rounded-full">
                                                            <img src="https://picsum.photos/200" alt=""className="h-5 w-5 "/>
                                                        </div>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.brand}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.itemsSold}</td>
                                                    <td>{item.revenue}</td>
                                                    
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                ) : (
                    <></>
                )}  
                             
            </div>

        </div>
    )
}
