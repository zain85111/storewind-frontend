import Head from "next/head"
import Navbar from "../../components/Navbar";
import {
  DotsHorizontalIcon,
  PlusCircleIcon,
  FilterIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Menu, Transition} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Employees = () => {
    const { token ,setToken} = useToken();
    const router = useRouter();

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

    const eemployees = [
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
        {
            id: '141',
            name: 'Johe Doe',
            salary:30000,
            city: 'Lahore',
            email: 'johnDoe@mail.com',
            noOfSales:201,
            joinedDate: '12-12-21',
        },
    ]

    const [employees, setEmployees] = useState([]);

    
    const getAllEmps = async () => {
        try {
            
            // let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/employees/", {
            //     method: 'POST',
            //     headers: {
                    
            //         'Accept': 'application/json, text/plain, */*',
            //         'Content-Type': 'application/json'
            //     },
            //     credentials: "include",
            //     body: JSON.stringify({"store_id": token.currentUser.email })
            // });
    
            // let result = await response.json();

            const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/employees/get_employee", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ id: router.query.id , storeId:token.currentUser.email}),
            });
            let res = await data.json()
            setEmployees(res)
            console.log(res,"All Employees")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (token.currentUser.rolename != 'ADMIN') {
            router.push('/')
        }
    })

    useEffect(() => {
        getAllEmps()
    },[])

    return (
        <div>
            <Head>
                <title>Storewind | Employees</title>
            </Head>
            <Navbar pageTitle={"Employees"} />
            {/* Content  */}
            <div className="p-4 space-y-2 relative">
                <div className="flex justify-end items-center h-14 ">
                    {employees ? (
                    <>
                        <div className="flex space-x-4 ">
                        <Link href={"/employees/add"}>
                            <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-[1px] border-green-800 bg-white active:text-green-600">
                            <span>
                                <PlusCircleIcon className="h-5 w-5 text-green-800" />
                            </span>
                            <p>Add Employees</p>
                            </button>
                        </Link>
                        {/* <Menu as="div" className="">
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
                        </Menu> */}
                        </div>
                    </>
                    ) : (
                    <></>
                    )}
                </div>
                {/* Table  */}
                {employees.length>0  ? (
                    <div className=" space-y-24">
                        <table className=" hover:border-collapse w-full text-center items-center align-middle">
                            <thead className="">
                                <tr className="h-14 bg-white border-b text-sm rounded-md">
                                    {/* <th className="space-x-4 p-2"><input type="checkbox" /></th> */}
                                    <th>Sr</th>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Salary</th>
                                    <th>Joined On</th>
                                    <th>Sales</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                            {employees.slice(0, 12).map((item, i) => (
                                <tr
                                className="h-10 bg-white hover:bg-gray-50 min-w-full text-xs"
                                key={item.id}
                                >
                                {/* <td className="space-x-4 p-2 min-w-max">
                                    <input type="checkbox" id="itemChk" />
                                </td> */}
                                <td>{i + 1}</td>
                                <td>{item._id.slice(0,3)+"..."+item._id.slice(item._id.length-3,item._id.length-1)}</td>
                                <td>{item.emp_name}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}Lahore</td>
                                <td>{item.salary}30,000</td>
                                <td>{new Date(item.joining_date).toDateString()}</td>
                                <td>{item.totalSales}</td>
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
                                                        href={"/employees/" + item._id}
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
                                                    <Link href={"/employees/edit/?id=" + item._id}>
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
                                                        href={"/employees/delete/?id=" + item._id}
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
            {/* Content End  */}
        </div>
        
    )
}

export default Employees

