import GitHubCalendar from 'react-github-calendar'



const CalendarCard = () => {
  return (
    <div className='xl:col-span-2 max-xl:col-span-10 flex flex-col items-center border-2 text-center shadow-md p-5 gap-5'>
      <span className='text-2xl font-bold'>  My Calendar </span>
        <GitHubCalendar username='ISongwuts' />
    </div>
  )
}

export default CalendarCard