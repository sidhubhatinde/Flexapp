import React, { useState } from 'react';
import dummyUser from '../../dummyUser';
import posts from '../../DummyData';

const AdminDashboard = () => {
    const [users, setUsers] = useState(dummyUser);
    const [jobs, setJobs] = useState(posts);

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    const handleDeleteJob = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Clients and Freelancers</h2>
                <div className="bg-white shadow-md rounded p-4">
                    {users.map(user => (
                        <div key={user._id} className="flex justify-between items-center border-b py-2">
                            <div>
                                <p className="font-medium">{user.name} ({user.role})</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            <button
                                onClick={() => handleDeleteUser(user._id)}
                                className="text-red-500 hover:underline">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Jobs</h2>
                <div className="bg-white shadow-md rounded p-4">
                    {jobs.map(job => (
                        <div key={job.id} className="flex justify-between items-center border-b py-2">
                            <div>
                                <p className="font-medium">{job.title}</p>
                                <p className="text-sm text-gray-600">{job.location} - {job.type}</p>
                            </div>
                            <button
                                onClick={() => handleDeleteJob(job.id)}
                                className="text-red-500 hover:underline">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;