import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon, MenuIcon, XIcon, BellIcon, MailIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({pageTitle}) => {
    return (
        <div>
            <nav className="h-12 p-5  bg-gray-100 flex flex-row justify-between items-center ">
                <div>
                    <p className="text-lg">{pageTitle }</p>
                    {/* <XIcon className='h-5 w-5 cursor-pointer'/> */}
                </div>
                <div className="flex flex-row space-x-4">
                    <Menu as="div" className="">
                        <Menu.Button className="active:text-green-600">
                            <BellIcon className=" h-5 w-5" aria-hidden="true" />
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
                            <Menu.Items className="origin-top-right absolute right-24 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Notification 1</button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Notification 1</button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Notification 1</button>
                                    )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="">
                        <Menu.Button className="active:text-green-600">
                            <MailIcon className=" h-5 w-5" aria-hidden="true" />
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
                            <Menu.Items className="origin-top-right absolute right-12 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Message 1</button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Message 1</button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Message 1</button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Message 1</button>
                                    )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="">
                            <Menu.Button className="active:text-green-600">
                                <UserCircleIcon className=" h-5 w-5" aria-hidden="true" />
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
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >My Profile</a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Sign out</button>
                                    )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
