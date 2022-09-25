import { Fragment } from 'react';
import { filterData } from '../utils/filterData';
import { useRouter } from 'next/router'
import { border } from '@chakra-ui/react';



const Filter = ({filterEnabled}) => {
  const router = useRouter();

  let details = { ...router.query };
  console.log('deatils', details);

  const getValues = (e) => {
    details = { ...details, [e.target.id]: e.target.value };
    console.log(details);
    // details.push({
    //   id: e.target.id,
    //   value: e.target.value
    // });
  }

  const filter = () => {
    // details.map(detail => {
    //   const { id, value } = detail;
    //   router.replace({
    //     query: {...router.query, [id]: value}
    //   })
    // })
    router.replace({
      query: { ...router.query, ...details }
    })
    router.push(router);
    console.log(router.query);
  }

  return <>
    <div className={`${filterEnabled && 'opacity-100'} opacity-0 transiton-all ease-in-out delay-150 m-5 flex flex-col gap-2 items-center justify-center lg:flex-row lg:gap-4`}>
      {filterData.map((filter, id) => {
        return <div key={filter.queryName} className='p-2 border-2 border-black rounded-xl w-auto'>
          <label className='font-semibold text-md ' htmlFor={filter.queryName}>{filter.placeholder}</label>
          <select id={filter.queryName} onChange={getValues}>
            {filter.items.map((item, id) => {
              return <option className='p-2 font-semibold text-lg cursor-pointer' key={item.value} id={item.value} value={item.value}>{item.name}</option>
            })}
          </select>
        </div>
      })
      }
    </div>
    <div className='flex items-center justify-center'>
      <button className='p-3 tracking-wide font-semibold bg-gray-300 border-2 border-black rounded-2xl text-xl hover:bg-slate-400' onClick={filter}>Filter</button>
    </div>
  </>
}



export default Filter;