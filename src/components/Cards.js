import React from 'react'
import Card from './Card';
import image1 from "../assets/reactjs.jpg"
import image2 from "../assets/java.jpg"
import image3 from "../assets/nodejs.jpg"

const cards = [
{
  id: 1,
  title: 'Fast React',
  image: image1,
  instructor: 'Tona Adonai'
},
{
  id: 2,
  title: 'Fast Java',
  image: image2,
  instructor: 'Carmen Rodriguez'
},
{
  id: 3,
  title: 'Fast Node',
  image: image3,
  instructor: 'Ale Loga'
}
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c => (
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
            </div>
          ) )
        }
      
      
      </div>
    </div>
  );
}
