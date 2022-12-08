import React from "react";
import { motion } from 'framer-motion';
import Carousel from 'framer-motion-carousel';


// add images of my fat self and other progress pics from when I trained my friends



const Welcome = () => {
	
  return (
<>
		<Carousel>
			<div>
				<div>
					<h1>EMBRACE YOUR NEW LIFESTYLE</h1>
				</div>
			</div>
			{[1, 2, 3, 4].map((item, i) => (
					<img draggable="false" src={`./${item}.jpg`} key={i} width="100%" alt="" />
			))}
		</Carousel>
</>
	);
};

export default Welcome;
