import React, { useEffect, useMemo, useRef, useState } from 'react'
import SwiperSlider from './SwiperSlider'
import { CiSearch } from "react-icons/ci";
import JobCard from '../../components/JobCard';
import posts from '../../DummyData';

function FindWork() {
    const [search,setSearch] = useState("");
    
    const inputRef = useRef();

    function handleChange(e)
    {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const filteredPosts = useMemo(() => {
        if(search.trim().length<=0)
        {
            return posts;
        }
        return posts.filter((post) => {
          return search.split(' ').some((skill) => 
            post.skills.some((element) => element.toLowerCase().includes(skill.toLowerCase()))
          );
        });
      }, [posts, search]);  
      useEffect(()=>{
          inputRef.current.focus();
      },[])
  return (
    <div>
        <SwiperSlider/>
        
        <div className='relative mx-auto my-16 w-11/12 text-3xl flex items-center'>
            <CiSearch className='size-12 absolute mx-7'/>
            <input ref={inputRef} type='text' placeholder='Search for jobs' onChange={handleChange} className='px-24 py-5 border-solid border-black border-2 w-[100%] rounded-2xl'/>
        </div>
        <div className='mx-auto my-10 w-11/12 '>
            <h2 className='text-5xl font-semibold'>Jobs you might like</h2>
            <div className='my-12'>
                {
                    filteredPosts.map((post)=>{
                        return  <JobCard post={post}/>
                    })
                }
            </div>
        </div>

        
    </div>
  )
}

export default FindWork