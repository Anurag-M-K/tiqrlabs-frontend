  import React from 'react'
  import { useSelector } from 'react-redux';

  function LoginUserHostedEvents() {
    const { eventsDetails} = useSelector(state=> state.events);

  // Filter upcoming events based on date
  const upcomingEvents = eventsDetails.filter(event => new Date(event.date) > new Date());
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <>
          <div className='grid grid-cols-3 gap-x-3'>
            
            {upcomingEvents?.map((events, i) => (
            <div
            className="max-w-sm min-w-[410px] mb-16 bg-white border border-gray-200 rounded-lg p-2   shadow-lg "
            key={i}
            
            >
                <div className="p-5 rounded-md"
                style={{ backgroundImage: `url(${events?.image})`, backgroundSize: 'cover',opacity:"" }}>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{events?.title}</h5>
                  </a>
                  <p className='text-blue-300 font-medium '>{formatDate(events?.date)}</p>
                  <p className="mb-3 font-normal text-white ">{event?.description}</p>
                  <a onClick={() => navigate(`/event-view/${events?._id}`)} href="#" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg   focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:scale-95 duration-300 dark:focus:ring-blue-800">
                    View Event
                    
                  </a>
                </div>
              </div>
            ))}
          </div>
            </>
        );
  }

  export default LoginUserHostedEvents