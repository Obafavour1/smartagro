import React from 'react'

const News = () => {
  return (
    <section id='news'>
        <div>
            <div className='text-center mb-10 mt-5'>
                <h4 className='heading4'>POPULAR FOODS AND VEGETABLES</h4>
                <h3 className='heading3'>Quality Fruits & Vegetables</h3>
            </div>

            <div>
                {
                    News.map(news=>{
                        return(
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>{news.name}</p>
                                    <p>{news.comment}</p>
                                </div>
                                <p>{news.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default News