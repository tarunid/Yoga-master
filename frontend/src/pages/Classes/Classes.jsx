import React , {useState, useEffect}from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch';

export const Classes = () => {
  const [classes, setClasses] = useState([]);
  const[hoveredCard, setHoveredCard] =useState(null);
  const axiosFetch = useAxiosFetch();

  const handleHover = (index) => {
    setHoveredCard(index);
  }
  useEffect(() => {
    axiosFetch.get('/classes').then(res => setClasses(res.data)).catch(err => console.log(err))

  },[]);
  console.log(classes)
  return (
    <div>
      <div className='mt-20 pt-3'>
        <h1 className='text-4xl font-bold text-center text-primary'></h1>
      </div>

      <div>
        {
          classes.map((cls, index) => (
            <div
            // key={index}
            // className={`relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64
            // h-[350px] mx-auto ${cls.availableSeats <1? 'bg-red-300': 'bg-white'} dark:bg-slate-600
            // rounded-lg shadow-lg overflow-hidden cursor-pointer`}
            >
              <div className='relative h-48'>
                <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 
                ${hoveredCard === index ? "opacity-60 ": ""}`}/>
                <img src={cls.image} alt=""  className='object-cover w-full h-full'/>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
