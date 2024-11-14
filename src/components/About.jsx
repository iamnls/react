import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext'
import Camera1 from '../assets/images/camera1.jpg'



const About = () => {
  const context = useContext(productContext)
  const { product, update, news, articles, fetchApi } = context
  console.log("this is my news", news);
  console.log("this is articles", articles);


  //console.log("my product", product);

  useEffect(() => {
    update()
    fetchApi()

  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          {/* <h4>this is about us component. my product name is :{product.name}</h4> */}
          <h4 className="news-header">
            My News
          </h4>
          {articles.slice(0,8).map((item) => {
            return(
              <div className='col=md-3'>
                <div key={item.source.id}className="card">
                  <img src={Camera1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.author}</h5>
                      <p className="card-text">{item.description}</p>
                      <a href={item.url} target="blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              </div>
            )})}
        </div>
      </div>
    </>
  )
}

export default About