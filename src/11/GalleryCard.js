// import gdata from './GalleryCard.json'
export default function GalleryCard({imgUrl, title, ptitle, ktag}) {
   
    if(ktag.includes(',')){
        ktag = ktag.split(',')
    }else{
        ktag = ktag.split(" ")
    }
    ktag = ktag.map(item =>{
        return <span className="inline-flex items-center px-3 py-2 m-1
                                text-sm font-medium text-center
                                text-white bg-sky-400 rounded-lg
                                hover:bg-blue-800 focus:ring-4 focus:outline-none
                                focus:ring-blue-300 dark:bg-blue-600
                                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {item}
         
    </span>
    
    })

    



    // const tagList = gdata.galSearchKeyword.split()
    // const tags = tagList.map(item => {
    //     <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //         {item}
    //          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //         </svg>
    //     </a>
        

    // })
  return (
    <div className="max-w-sm shadow-gray-700 bg-sky-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src= {imgUrl} alt={title} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ptitle}</p>
        {ktag}
    </div>
</div>
  )
}
