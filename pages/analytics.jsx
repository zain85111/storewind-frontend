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

    const filters = [
        {
            id: 1,
            name:'Filter A',
        },
        {
            id: 2,
            name:'Filter B',
        },
        {
            id: 3,
            name:'Filter C',
        },
    ];

    const topProducts = [
        {
            id: 23,
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
            id: 23,
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
            id: 23,
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
            id: 23,
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
            id: 23,
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
    const topBrands = [
        {
            id: 23,
            name: 'MAC',
            category: 'kitchen',
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
        },
        {
            id: 23,
            name: 'MAC',
            category: 'kitchen',
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
        },
        {
            id: 23,
            name: 'MAC',
            category: 'kitchen',
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
        },
        {
            id: 23,
            name: 'MAC',
            category: 'kitchen',
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
        },
        {
            id: 23,
            name: 'MAC',
            category: 'kitchen',
            discount: 920.00,
            revenue: 3541.00,
            itemsSold: 412,
            trendData:'',
        },



    ]

    const categories = ['Daily', 'Weekly', 'Monthly']
    



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
                                    {categories.map((category,idx) => (
                                        <Tab
                                        key={idx}
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
                                        {category}
                                        </Tab>
                                    ))}
                                    </Tab.List>
                                </div>
                            </div>
                            <Tab.Panels className="mt-10">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl  space-x-4 flex justify-between items-center ',
                                        
                                    )}
                                    >
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <ChartBarIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">248K</p>
                            <p className="text-gray-500 text-sm">Total Sales</p>
                        </div>
                    </div>
                    <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <CurrencyDollarIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">133K</p>
                            <p className="text-gray-500 text-sm">Total Revenue</p>
                        </div>
                    </div>
                    <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <TicketIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">6K</p>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                        </div>
                    </div>
                    <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
                </div>
                <div className="bg-white w-72 h-44 rounded-xl">
                    <div className="flex items-center space-x-5 px-8 py-5 ">
                        <ClipboardListIcon className="w-8 h-8 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">32K</p>
                            <p className="text-gray-500 text-sm">Total Products Sold</p>
                        </div>
                    </div>
                    <Line width={200} height={70} options={lineTrendDataOptions} data={lineTrendData}  />
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
                                <Link href={"/topProducts/download"}>
                                    <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-[1px] border-green-800 bg-white active:text-green-600">
                                    <span>
                                        <DownloadIcon className="h-5 w-5 text-green-800" />
                                    </span>
                                    <p>Download Report</p>
                                    </button>
                                </Link>
                                <Menu as="div" className="">
                                    <Menu.Button className="active:text-green-600 text-sm font-semibold  border-[1px] border-green-800 bg-white p-2 flex items-center rounded-xl space-x-6">
                                        <FilterIcon className="h-4 w-4 text-green-800" />
                                        <p>Filter</p>
                                        <ChevronDownIcon className=" h-4 w-4 text-green-800" />
                                    </Menu.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-4 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                            {
                                                filters.map((f) => (
                                                
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                    >
                                                        {f.name}
                                                    </button>
                                                    )}
                                                </Menu.Item>
                                                ))
                                            }
                                            
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                        </div>
                        
                        <table className="hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="">
                                <tr className="h-16  text-sm">
                                    <th className="space-x-4 p-2"><input type="checkbox" /></th>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Revenue</th>
                                    <th>Discount</th>
                                    <th>Items Sold</th>
                                    <th>Trend</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                            {topProducts.slice(0, 5).map((item, i) => (
                                <tr
                                className="h-14 hover:bg-gray-50 min-w-full text-xs"
                                key={item.id}
                                >
                                    <td className="space-x-4 p-2 min-w-max"><input type="checkbox" id="itemChk" /></td>
                                    <td>{item.id}</td>
                                    <td className="flex justify-center items-center">
                                        <div className="h-7 w-7 bg-white items-center flex justify-center rounded-full">
                                        <img
                                            src="https://picsum.photos/200"
                                            alt=""
                                            className="h-5 w-5 "
                                        />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.itemsSold}</td>
                                    <td>{item.trendData}</td>
                                    <td className=" flex justify-center py-2 ">
                                        <Menu as="div" className="">
                                            <Menu.Button className="active:text-green-600">
                                                <DotsHorizontalIcon className=" h-5 w-5" aria-hidden="true"/>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className=" absolute right-10 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/topProducts/" + item.id}
                                                            key={item.id}
                                                        >
                                                            <button className="flex space-x-2">
                                                            <ViewListIcon className="h-5 w-5" />
                                                            <p>Details</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link href={"/topProducts/edit/?id=" + item.id}>
                                                            <button className="flex space-x-2">
                                                            <PencilAltIcon className="h-5 w-5" />
                                                            <p>Update</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/topProducts/delete/?id=" + item.id}
                                                        >
                                                            <button className="flex space-x-2">
                                                            <TrashIcon className="h-5 w-5" />
                                                            <p>Remove</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    
                                                </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>
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
                                <Link href={"/topProducts/download"}>
                                    <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-[1px] border-green-800 bg-white active:text-green-600">
                                    <span>
                                        <DownloadIcon className="h-5 w-5 text-green-800" />
                                    </span>
                                    <p>Download Report</p>
                                    </button>
                                </Link>
                                <Menu as="div" className="">
                                    <Menu.Button className="active:text-green-600 text-sm font-semibold  border-[1px] border-green-800 bg-white p-2 flex items-center rounded-xl space-x-6">
                                        <FilterIcon className="h-4 w-4 text-green-800" />
                                        <p>Filter</p>
                                        <ChevronDownIcon className=" h-4 w-4 text-green-800" />
                                    </Menu.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-4 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                            {
                                                filters.map((f) => (
                                                
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                    >
                                                        {f.name}
                                                    </button>
                                                    )}
                                                </Menu.Item>
                                                ))
                                            }
                                            
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                        </div>
                        
                        <table className="hover:border-collapse w-full text-center items-center align-middle bg-white rounded-lg">
                            <thead className="">
                                <tr className="h-16  text-sm">
                                    <th className="space-x-4 p-2"><input type="checkbox" /></th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Revenue</th>
                                    <th>Discount</th>
                                    <th>Items Sold</th>
                                    <th>Trend</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                            {topBrands.slice(0, 5).map((item, i) => (
                                <tr
                                className="h-14 hover:bg-gray-50 min-w-full text-xs"
                                key={item.id}
                                >
                                    <td className="space-x-4 p-2 min-w-max"><input type="checkbox" id="itemChk" /></td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.itemsSold}</td>
                                    <td>{item.trendData}</td>
                                    <td className=" flex justify-center py-2 ">
                                        <Menu as="div" className="">
                                            <Menu.Button className="active:text-green-600">
                                                <DotsHorizontalIcon className=" h-5 w-5" aria-hidden="true"/>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className=" absolute right-10 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/topProducts/" + item.id}
                                                            key={item.id}
                                                        >
                                                            <button className="flex space-x-2">
                                                            <ViewListIcon className="h-5 w-5" />
                                                            <p>Details</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link href={"/topProducts/edit/?id=" + item.id}>
                                                            <button className="flex space-x-2">
                                                            <PencilAltIcon className="h-5 w-5" />
                                                            <p>Update</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/topProducts/delete/?id=" + item.id}
                                                        >
                                                            <button className="flex space-x-2">
                                                            <TrashIcon className="h-5 w-5" />
                                                            <p>Remove</p>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    )}
                                                    </Menu.Item>
                                                    
                                                </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>
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
