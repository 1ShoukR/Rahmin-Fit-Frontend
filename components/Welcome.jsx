import React from "react";
import { motion } from 'framer-motion';
import Carousel from 'framer-motion-carousel';


const Welcome = () => {
  return (
		<>
		<Carousel>
			{[1, 2, 3, 4].map((item, i) => (
					<img draggable="false" src={`./${item}.jpg`} key={i} width="100%" alt="" />
			))}
			<div>
				<div>
					<h1>EMBRACE YOUR NEW LIFESTYLE</h1>
				</div>
			</div>
		</Carousel>
		</>
	);
};

export default Welcome;
