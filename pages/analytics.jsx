import Head from "next/head"
import Navbar from "../components/Navbar";
import {
  CurrencyDollarIcon, ChartBarIcon,TicketIcon,ClipboardListIcon
} from "@heroicons/react/outline";

import { Tab} from "@headlessui/react";
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
import LoadingSpinner from "../components/LoadingSpinner";


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



const Analytics = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    
    const [topAnalytics, setTopAnalytics] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [topProducts, setTopProducts] = useState(null);
    const [topBrands, setTopBrands] = useState(null);

    const [topAnalyticsTime, setTopAnalyticsTime] = useState("daily");
    const [topProductTime, setTopProductTime] = useState("daily");
    const [topBrandsTime, setTopBrandsTime] = useState("daily");

    useEffect(() => {
        setIsLoading(true)
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
            setIsLoading(false)
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

    const renderContent = (

        <div className="p-5 space-y-6">
            <div className="space-y-4">
                <div className="w-full">
                    <Tab.Group >
                        <div className="flex flex-col gap-3 justify-between md:flex-row md:items-center">
                            <p className="font-semibold text-lg">Sales Statistics</p>
                            <div className="w-full md:w-1/2 xl:w-1/3">
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
                                    'rounded-xl gap-4 flex flex-wrap xl:flex-nowrap xl:space-x-4 justify-between items-center ',
                                    
                                )}
                                >
                                        <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                                                <ChartBarIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalSales)}</p>
                                                    <p className="text-gray-500 text-[10px] md:text-base">Total Sales</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                                                <CurrencyDollarIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.revenue)}</p>
                                                    <p className="text-gray-500 text-[10px] md:text-base">Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                                                <TicketIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalOrders)}</p>
                                                    <p className="text-gray-500 text-[10px] md:text-base">Total Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                                            <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                                                <ClipboardListIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                                                <div className="space-y-1">
                                                    <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalProductsSold)}</p>
                                                    <p className="text-gray-500 text-[10px] md:text-base">Total Products Sold</p>
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
                    <p className="font-semibold text-lg">Top Products</p>
                    <div className="overflow-x-auto">
                        <table className="table-auto hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="text-sm">
                                <tr className="bg-white rounded-md">
                                    <th scope="col" className="px-3 py-1">Sr.</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Brand</th>
                                    <th scope="col" className="px-6 py-3">Sales</th>
                                    <th scope="col" className="px-6 py-3">Items Sold</th>
                                </tr>
                            </thead>
                            <tbody>
                            {topProducts.slice(0, 5).map((item, i) => (
                                <tr
                                    className="bg-white hover:bg-gray-50 text-xs"
                                    key={i}
                                >
                                    <th scope="row" className="px-3 py-2">{i+1}</th>   
                                    <td className="px-6 py-2">{item.product}</td>
                                    <td className="px-6 py-2">{item.brand}</td>
                                    <td className="px-6 py-2">{item.sales}</td>
                                    <td className="px-6 py-2">{item.count}</td>                                
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <></>
            )}  
            
            {/* Top Brands  */}
            {topBrands ? (
                <div className="space-y-4">
                    <p className="font-semibold text-lg">Top Brands</p>
                    <div className="overflow-x-auto">
                        <table className="hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="text-sm">
                                <tr className="bg-white rounded-md">
                                    <th scope="col" className="px-3 py-1">Sr.</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Sales</th>
                                    <th scope="col" className="px-6 py-3">Items Sold</th>
                                </tr>
                            </thead>
                            <tbody>
                            {topBrands.slice(0, 5).map((item, i) => (
                                <tr
                                    className="bg-white hover:bg-gray-50 text-xs"
                                    key={i}
                                >
                                    <th scope="row" className="px-3 py-2">{i+1}</th>
                                    <td className="px-6 py-2">{item.brand}</td>
                                    <td className="px-6 py-2">{item.sales}</td>
                                    <td className="px-6 py-2">{item.count}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <></>
            )}               
        </div>
    )

    const loadingSpinner = (
        <div className="w-full h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        <div>
            <Head>
                <title>Storewind | Analytics</title>
            </Head>
            <Navbar pageTitle={"Analytics"} />
            {isLoading ? loadingSpinner : renderContent}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}

        </div>
    )
}

export default Analytics
