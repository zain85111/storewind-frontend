import Head from "next/head"
import Navbar from "../components/Navbar";
import {
  DotsHorizontalIcon,
  FilterIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
  DownloadIcon,
  CurrencyDollarIcon, ChartBarIcon,TicketIcon,ClipboardListIcon
} from "@heroicons/react/outline";

import { Menu, Transition,Tab} from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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


const Analytics = () => {

    

    
    const [topAnalytics, setTopAnalytics] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [topProducts, setTopProducts] = useState(null);
    const [topBrands, setTopBrands] = useState(null);

    const [topAnalyticsTime, setTopAnalyticsTime] = useState("daily");
    const [topProductTime, setTopProductTime] = useState("daily");
    const [topBrandsTime, setTopBrandsTime] = useState("daily");

    useEffect(()=>{
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        d = `${ye}-${mo}-${da}` + "T00:00:00.000Z";
        const getAnalytics = async()=>{
            console.log(d,"Date");
            let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/weekly_bar_analytics", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({date: d}),
            })

            setChartData(await response.json());
            console.log(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`);
            let response2 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({date: d}),
            })

            const res = await response2.json()
            console.log(res,"Top Brands")
            setTopBrands(res);

            let response3 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topProductTime}_top_products`, {
                method: "POST",
                headers: {

                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({date: d}),
            })
            const res3 = await response3.json();
            console.log(res3,"Top Products")
            setTopProducts(res3);


            let response4 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topAnalyticsTime}_analytics`, {
                method: "POST",
                headers: {

                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({date: d}),
            })

            setTopAnalytics(await response4.json());
        }
        getAnalytics();

    },[topBrandsTime, topProductTime, topAnalyticsTime]);

    
    function intToString(value) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor((""+value).length/3);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            shortValue = shortValue.toFixed(1);
        }
        return shortValue+suffixes[suffixNum];
    }
    const durations = ['Daily', 'Weekly', 'Monthly']
    // const topProducts = [];

    return (
        <div>
            <Head>
                <title>Storewind | Analytics</title>
            </Head>
            <Navbar pageTitle={"Analytics"} />
            <div className="p-5 space-y-6 ">
                <div className="space-y-4">
                    <div className="w-full">
                        <Tab.Group >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-lg">Sales Statistics</p>
                                <div className="w-1/3">
                                    <Tab.List className="flex p-1 space-x-1 bg-white rounded-xl">
                                    {durations.map((duration,idx) => (
                                        <Tab
                                            key={idx}
                                            onClick={() => {
                                                setTopAnalyticsTime(duration);
                                                setTopProductTime(duration);
                                                setTopBrandsTime(duration);
                                                console.log(topAnalyticsTime);
                                            }}
                                            className={({ selected }) =>
                                                classNames(
                                                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
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
                            </div>
                            <Tab.Panels className="mt-10">
                                {Object.values(durations).map((posts, idx) => (
                                    <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl  space-x-4 flex justify-between items-center ',
                                        
                                    )}
                                    >
                                        <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-10 px-8 ">
                                                <ChartBarIcon className="w-12 h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalSales)}</p>
                                                    <p className="text-gray-500 text-">Total Sales</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-10 px-8 ">
                                                <CurrencyDollarIcon className="w-12 h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.revenue)}</p>
                                                    <p className="text-gray-500 text-">Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-10 px-8 ">
                                                <TicketIcon className="w-12 h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalOrders)}</p>
                                                    <p className="text-gray-500 text-">Total Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-10 px-8 ">
                                                <ClipboardListIcon className="w-12 h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalProductsSold)}</p>
                                                    <p className="text-gray-500 text-">Total Products Sold</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>

                {/* Top Products  */}
                {topProducts ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center h-14 ">
                            <p className="font-semibold text-lg">Top Products</p>
                            <div className="flex space-x-4 ">
                               
                            </div>

                        </div>
                        
                        <table className="hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="">
                                <tr className="h-16  text-sm">
                                    <th>Sr.</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Sales</th>
                                    <th>Items Sold</th>
                                    {/* <th>Trend</th> */}
                                </tr>
                            </thead>
                            <tbody className="">
                            {topProducts.slice(0, 5).map((item, i) => (
                                <tr
                                className="h-14 hover:bg-gray-50 min-w-full text-xs"
                                key={i}
                                >
                                    <td>{i+1}</td>
                                   
                                    <td>{item.product}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.sales}</td>
                                    <td>{item.count}</td>
                                    
                                    {/* <td className="w-20">
                                        <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
                                    </td> */}
                                    
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <></>
                )}  
                
                {/* Top Brands  */}
                {topBrands ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center h-14 ">
                            <p className="font-semibold text-lg">Top Brands</p>
                            <div className="flex space-x-4 ">
                              
                            </div>

                        </div>
                        
                        <table className="hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="">
                                <tr className="h-16  text-sm">
                                    <th>Sr.</th>
                                    <th>Name</th>
                                    <th>Sales</th>
                                    <th>Items Sold</th>
                                    {/* <th>Trend</th> */}
                                </tr>
                            </thead>
                            <tbody className="">
                            {topBrands.slice(0, 5).map((item, i) => (
                                <tr
                                className="h-14 hover:bg-gray-50 min-w-full text-xs"
                                key={i}
                                >
                                    <td>{i+1}</td>

                                    <td>{item.brand}</td>
                                    <td>{item.sales}</td>
                                    <td>{item.count}</td>
                                   {/* <td>
                                        <Line width={200} height={70} options={lineTrendDataOptions} data={item.trendData}  />
                                    </td> */}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <></>
                )}               
            </div>
        </div>
    )
}

export default Analytics
