import React,{ useState } from 'react'
import { GoOrganization } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";
import { PiAddressBookLight } from "react-icons/pi";
import { BiHide,BiShow } from "react-icons/bi";

function FreelancerProfile() {

      const [isExpanded,setIsExpanded] = useState(false);
      const [showCard, setShowCard] = useState(false);
      const [user,setUser] = useState({
        _id: "ObjectId",
        email: "johndoe@gmail.com",
        password: "hashed_pw",
        role: "client",
        name: "John Doe",
        location: "Lahore",
        balance: "0",
        billingInfo: {
          cardNumber: "5555555555554444",
          expiryDate: "11/27",
          cvv: "456",
          billingAddress: "456 Business Road, Karachi"
        },
      
        // Fields specific to freelancer
        freelancerProfile: {
          title:"Software Engineer l MERN Stack",
          skills: ["React", "Node.js"],
          hourlyRate: 30,
          experienceLevel: "intermediate",
          bio: "SOFTWARE ENGINEERING STUDENT \nTo seek an internship that offers professional challenges utilizing my technical skills, excellent time management, and problem-solving abilities. I am passionate about learning new things every day and enhancing my knowledge and experience through practical work in the industry. Eager to contribute to innovative projects while continuously expanding my expertise in a dynamic and collaborative environment.\nPROJECTS\nRace Car Game: I successfully implemented a race car game, utilizing various data structures such as graphs, queues, linked lists, and trees. Additionally, I incorporated algorithms including Depth-First Search (DFS) and Dijkstra's algorithm to enhance the functionality and gameplay experience.",
          proposals: ["proposalId1", "proposalId2"],
          
          workHistory: [
            {
              title: "Frontend Developer",
              company: "ABC Solutions",
              startDate: "2021-01-01",
              endDate: "2023-01-01",
              description: "Built and maintained frontend applications using React."
            },
            {
              title: "Full Stack Developer",
              company: "XYZ Technologies",
              startDate: "2019-06-01",
              endDate: "2020-12-01",
              description: "Worked on MERN stack projects for clients."
            }
          ],
      
          education: [
            {
              degree: "BS in Software Engineering",
              institution: "FAST NUCES",
              startDate: "2015-08-01",
              endDate: "2019-06-01"
            }
          ],
      
          languages: [
            {
              name: "English",
              proficiency: "Fluent"
            },
            {
              name: "Urdu",
              proficiency: "Native"
            }
          ],
      
          projectsCatalog: [
            {
              title: "E-commerce Website",
              description: "A full-stack MERN app for online shopping.",
              technologies: ["React", "Node.js", "MongoDB", "Express"],
            },
            {
              title: "Portfolio Website",
              description: "Personal portfolio with animations and responsive design.",
              technologies: ["React", "Tailwind CSS"],
            }
          ]
        },
      
        // Fields specific to client
        clientProfile: {
          companyName: "Tech Innovate",
          jobsPosted: ["jobId1", "jobId2"],
          industry: "Tech & IT",
          companyWebsite: "https://techinnovate.com",
          description: "Lorem ipsum dolor sit, amet consectetur..."
        },
      
        createdAt: "2024-01-01T00:00:00Z"
      })
    
      const toggleCardVisibility = () => {
        setShowCard((prev) => !prev);
      };
      
    const toggleExpanded = () => {
      setIsExpanded((prev) => !prev);
    };
    const handleDeleteBillingInfo = () => {
      setUser(prev => ({
        ...prev,
        billingInfo: {
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          billingAddress: ""
        }
      }));
    };
        const [billingInfo, setBillingInfo] = useState({
            name: '',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
            billingAddress: '',
          });
          const handleChange = (e) => {
            const { name, value } = e.target;
            setBillingInfo((prev) => ({
              ...prev,
              [name]: value,
            }));
          };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit?.(billingInfo);
      console.log('Billing Info:', billingInfo);
      // send to backend
    };

      const isLong = user.freelancerProfile.bio.split(' ').length > 90;
      const maskedCard = user.billingInfo.cardNumber.replace(/\d(?=\d{4})/g, '*');
  return (
    <div className='text-4xl m-20 border-[rgb(103,103,103,1)] border-2 border-solid  rounded-3xl'>
        <div className='p-16 flex items-center gap-x-20 gap-y-10'>
            <div>
              <svg className='size-56' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"></path></svg>
            </div>
            <div className='flex flex-col items-start gap-5'>
              <h2 className='font-semibold text-6xl'>{user.name}</h2>
              <div className='flex items-center gap-3'>
                <svg className='size-16' xmlns="http://www.w3.org/2000/svg" fill="none" ariaahidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.4 9.4C18.4 5.9 15.6 3 12 3 8.4 3 5.6 5.9 5.6 9.4c0 1.5.6 2.9 1.5 4.1 1.3 1.8 5 7.5 5 7.5s3.6-5.7 5-7.5c.7-1.2 1.3-2.5 1.3-4.1z"></path></svg>
                <p>{user.location}</p>
              </div>
            </div>
        </div>
        <hr className='text-[rgb(103,103,103,1)] opacity-100'/>
        <div className='p-16'>
          <div className='font-semibold text-5xl flex items-center justify-between my-6'> 
            <h4>{user.freelancerProfile.title}</h4>
             <h5>${user.freelancerProfile.hourlyRate}/hr</h5>
          </div>
          <div>
            <p className={`text-[#676767] leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>{user.freelancerProfile.bio}</p>
            {isLong && (
            <button
            onClick={toggleExpanded}
            className="text-primary underline mt-2"
            >
            {isExpanded ? 'less' : 'more'}
            </button>
        )}
          </div>
        </div>
        <hr/>
        <div className='p-16'>
                <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                    <h3 className='text-5xl font-semibold'>Balance: ${user.balance}</h3>
                </div>
                {
                    user.billingInfo.cardNumber!==""?(
                        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                        <h2 className='text-5xl font-semibold my-6'>Your payment address</h2>
            
                        <div className='border-2 border-solid border-[#d9d9d9] p-10'>
                            <div className='flex items-start justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-6'>
                                <CiCreditCard1 className='size-16' />
                                <h5 className='my-6 tracking-widest'>
                                    {showCard ? user.billingInfo.cardNumber : maskedCard}
                                </h5>
                                <button
                                onClick={toggleCardVisibility}
                                className='text-blue-600 ml-20 hover:underline text-sm w-fit'
                                >
                                {showCard ? <BiHide className='size-12 text-[#676767]'/> : <BiShow className='size-12 text-[#676767]'/>}
                                </button>
                                </div>
                            </div>
            
                            <button onClick={handleDeleteBillingInfo} className='text-red-600 px-8 py-4 hover:underline'>Delete</button>
                            </div>
            
                            <div className='flex items-center gap-6 mt-6'>
                            <PiAddressBookLight className='size-16' />
                            <p>{user.billingInfo.billingAddress}</p>
                            </div>
                        </div>
                    </div>
                    ):(
                        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-5xl font-semibold mb-6">Add Billing Method</h2>
            
                            <label className="block mb-6">
                                Full Name
                                <input
                                type="text"
                                name="name"
                                value={billingInfo.name}
                                onChange={handleChange}
                                className="w-full border px-5 py-4 rounded mt-4"
                                required
                                />
                            </label>
            
                            <label className="block mb-6">
                                Card Number
                                <input
                                type="text"
                                name="cardNumber"
                                value={billingInfo.cardNumber}
                                onChange={handleChange}
                                maxLength="19"
                                className="w-full border px-5 py-4 rounded mt-4"
                                required
                                />
                            </label>
            
                            <div className="flex gap-4 mb-6">
                                <label className="flex-1">
                                Expiry Date (MM/YY)
                                <input
                                    type="text"
                                    name="expiryDate"
                                    value={billingInfo.expiryDate}
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                    className="w-full border px-5 py-4 rounded mt-4"
                                    required
                                />
                                </label>
            
                                <label className="flex-1">
                                CVC
                                <input
                                    type="text"
                                    name="cvc"
                                    value={billingInfo.cvc}
                                    onChange={handleChange}
                                    maxLength="4"
                                    className="w-full border px-5 py-4 rounded mt-4"
                                    required
                                />
                                </label>
                            </div>
            
                            <label className="block mb-6">
                                Billing Address
                                <input
                                type="text"
                                name="billingAddress"
                                value={billingInfo.billingAddress}
                                onChange={handleChange}
                                className="w-full border px-5 py-4 rounded mt-4"
                                required
                                />
                            </label>
            
                            <button type="submit" className="bg-blue-600 text-white px-8 py-5 rounded hover:bg-blue-700">
                                Save Billing Method
                            </button>
                        </form>
                    </div>
                    )
                }
        </div>
        <hr className='text-[rgb(103,103,103,1)] opacity-100'/>
        <div className='p-16'>
          <h4 className='font-semibold text-5xl'>Work History</h4>
            <div>
              {
                user.freelancerProfile.workHistory.length>0?(
                  <ul className='mt-7'>
                  {user.freelancerProfile.workHistory.map((work,index)=>{
                      return (<li key={index} className='my-5'>
                        <div className='font-semibold flex items-center justify-between bg-primary hover:bg-primaryHover text-white my-3 px-10 rounded-xl'>
                          <h5 className='font-bold my-6'>{work.title}</h5>
                          <p>{work.startDate} - {work.endDate}</p>
                        </div>
                        <div className='flex items-center gap-7 '>
                          <GoOrganization className='size-12' />
                          <p>{work.company}</p>
                        </div>
                        <p className='text-[#676767] my-3'>{work.description}</p>
                      </li>)
                  })}
              </ul>
                ):(<p className='text-[#676767]'>No item</p>)
              }
            </div>
        </div>
        <hr />
        <div className='p-16'>
            <h4 className='font-semibold text-5xl'>Skills</h4>
            <div className='my-6'>
              <ul className="flex gap-4 items-center overflow-x-auto scroll-smooth no-scrollbar mt-7">
                {user.freelancerProfile.skills.map((skill) => (
                <li key={skill} className="bg-[#d9d9d9] px-6 py-3 rounded-full whitespace-nowrap shrink-0">
                    {skill}
                </li>
                ))}
            </ul>
            </div>
        </div>
        <hr />
        <div className='p-16'>
          <h4 className='font-semibold text-5xl'>Education</h4>
            <div>
              {
                user.freelancerProfile.education.length>0?(
                  <ul className='mt-7'>
                  {user.freelancerProfile.education.map((school,index)=>{
                      return (<li key={index} className='my-5'>
                        <div className='font-semibold flex items-center justify-between bg-primary hover:bg-primaryHover text-white my-3 px-10 rounded-xl'>
                          <h5 className='font-bold my-6'>{school.degree}</h5>
                          <p>{school.startDate} - {school.endDate}</p>
                        </div>
                        <div className='flex items-center gap-7 '>
                          <GoOrganization className='size-12' />
                          <p>{school.institution}</p>
                        </div>
                      </li>)
                  })}
              </ul>
                ):(<p className='text-[#676767]'>No item</p>)
              }
            </div>
        </div>
        <hr />
        <div className='p-16'>
          <h4 className='font-semibold text-5xl'>Languages</h4>
            <div>
              {
                user.freelancerProfile.languages.length>0?(
                  <ul className='mt-7'>
                  {user.freelancerProfile.languages.map((language,index)=>{
                      return (<li key={index} className='my-2'>
                        <div className='font-semibold flex items-center justify-between'>
                          <h5 className='font-bold my-4'>{language.name}</h5>
                          <p>{language.proficiency}</p>
                        </div>
                      </li>)
                  })}
              </ul>
                ):(<p className='text-[#676767]'>No item</p>)
              }
            </div>
        </div>
        <hr />
        <div className='p-16'>
            <h4 className='font-semibold text-5xl'>Your project catalog</h4>
            <div>
              {
                user.freelancerProfile.projectsCatalog.length>0?(
                  <ul className='mt-7'>
                  {user.freelancerProfile.projectsCatalog.map((project,index)=>{
                      return (<li key={index} className='my-2 border-2 border-black border-solid p-8'>
                        <div className='font-semibold flex flex-col items-start'>
                          <h5 className='font-bold my-2'>{project.title}</h5>
                          <br />
                          <p>{project.description}</p>
                          <br />
                          <div>
                              <ul className="flex gap-x-4  items-center overflow-x-auto scroll-smooth no-scrollbar mt-2">
                                {project.technologies.map((skill) => (
                                <li key={skill} className="bg-[#d9d9d9] px-6 py-2 rounded-full whitespace-nowrap shrink-0">
                                    {skill}
                                </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </li>)
                  })}
              </ul>
                ):(<p className='text-[#676767]'>No item</p>)
              }
            </div>

        </div>
    </div>
  )
}

export default FreelancerProfile