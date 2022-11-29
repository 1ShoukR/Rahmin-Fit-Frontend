import React from "react";
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
		<>
			<motion.div
				animate={{
					x: 0,
					backgroundColor: '#000',
					boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
					position: 'fixed',
					transitionEnd: {
						display: 'none',
					},
				}}
			/>
			<div>
				<div>
					<h1>EMBRACE YOUR NEW LIFESTYLE</h1>
				</div>
			</div>
		</>
	);
};

export default Welcome;
