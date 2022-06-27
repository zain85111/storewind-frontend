import Head from "next/head"
import Navbar from "../../components/Navbar";
import {
  DotsHorizontalIcon,
  PlusCircleIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

import { Menu, Transition} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Employees = () => {
    const { token} = useToken();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
            

            const data = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/employees/get_all", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ store_id:token.currentUser.email }),
            });
            let res = await data.json()
            setEmployees(res)
            if (res.length <= 0 ){
                setErrorMessage("No Employees found")
            }
            setIsLoading(false)
            console.log(res,"All Employees")
        } catch (err) {
            console.log(err)
            setErrorMessage("Unable to fetch Employees list");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (token.currentUser.rolename != 'ADMIN') {
            router.push('/')
        }
    })

    useEffect(() => {
        setIsLoading(true);
        getAllEmps()
    }, [])
    

    const renderEmps = (

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
                        </div>
                    </>
                    ) : (
                    <></>
                    )}
                </div>
                {/* Table  */}
                {employees.length>0  ? (
                    <div className="overflow-x-auto">
                        <table className="hover:border-collapse w-full text-center md:align-middle">
                            <thead className="text-sm">
                                <tr className="bg-white border-b rounded-md">
                                    <th scope="col" className="px-3 py-1">Sr</th>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Full Name</th>
                                    <th scope="col" className="px-6 py-3">Phone</th>
                                    <th scope="col" className="px-6 py-3">Salary</th>
                                    <th scope="col" className="px-6 py-3">Joined On</th>
                                    <th scope="col" className="px-6 py-3">Sales</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {employees.slice(0, 12).map((item, i) => (
                                <tr
                                    className="bg-white hover:bg-gray-50 text-xs"
                                    key={i}
                                >
                                    <th scope="row" className="px-3 py-2">{i + 1}</th>
                                    <td className="px-6 py-2">{item._id.slice(0,3)+"..."+item._id.slice(item._id.length-3,item._id.length-1)}</td>
                                    <td className="px-6 py-2">{item.emp_name}</td>
                                    <td className="px-6 py-2">{item.phone}</td>
                                    <td className="px-6 py-2">{item.salary}</td>
                                    <td className="px-6 py-2">{new Date(item.joining_date).toDateString()}</td>
                                    <td className="px-6 py-2">{item.totalSales}</td>
                                    <td className="px-6 py-2 text-center">
                                        <Menu as="div">
                                            <Menu.Button className="active:text-green-600">
                                                <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true"/>
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
                                                <Menu.Items className="absolute right-10 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                        className={classNames(
                                                            active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                            "block w-full text-left px-4 py-2 text-sm hover:text-blue-500"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/employees/" + item._id}
                                                            key={item.id}
                                                        >
                                                            <button className="flex space-x-2">
                                                                <ViewListIcon className="h-5 w-5" />
                                                                <p className="hidden md:block">Details</p>
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
                                                            "block w-full text-left px-4 py-2 text-sm hover:text-green-600"
                                                        )}
                                                        >
                                                        <Link href={"/employees/edit/?id=" + item._id}>
                                                            <button className="flex space-x-2">
                                                                <PencilAltIcon className="h-5 w-5" />
                                                                <p className="hidden md:block">Update</p>
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
                                                            "block w-full text-left px-4 py-2 text-sm hover:text-red-500"
                                                        )}
                                                        >
                                                        <Link
                                                            href={"/employees/delete/?id=" + item._id}
                                                        >
                                                            <button className="flex space-x-2">
                                                                <TrashIcon className="h-5 w-5" />
                                                                <p className="hidden md:block">Remove</p>
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
    );

    const loadingSpinner = (
        <div className="w-full h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        <div>
            <Head>
                <title>Storewind | Employees</title>
            </Head>
            <Navbar pageTitle={"Employees"} />
            {/* Content  */}
            {isLoading ? loadingSpinner : renderEmps}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
            {/* Content End  */}
        </div>
        
    )
}

export default Employees

