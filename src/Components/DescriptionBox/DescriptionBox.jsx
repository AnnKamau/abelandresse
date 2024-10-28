import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (55)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Bought this phone recently and I’m impressed. The display is crisp, the battery life is solid, and the camera quality has noticeably improved. It handles apps smoothly without lag. The design feels premium and it's comfortable in hand. Slight downside: price is a bit steep, but you’re paying for top-notch features. Overall, a great buy if you’re looking for a high-performance device.
        Enjoying it so far, and would recommend. </p>
        
        <p>Just got my hands on this phone, and it's a game-changer. The screen is stunningly sharp, making every detail pop. Battery lasts all day, even with heavy use. The camera captures clear, vibrant photos—low light performance is also impressive. It's lightning-fast with no lag during multitasking. Design is sleek and feels durable. It's on the pricier side, but worth every penny for the quality and features.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
