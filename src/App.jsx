import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import { useState } from 'react';

function App() {
	const [completed, setCompleted] = useState(false);
	const labelDates = ['DÍAS', 'HORAS', 'MINS', 'SEGS'];
	const finalDate = 1702616400000+64800000; // Timestamp in milliseconds
	return (
		<div
			className='app'
			style={{
				backgroundImage: `url(${completed ? img2 : img1})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			}}
		>
			{!completed && (
				<div className='container'>
					<div className='countdown'>
						<FlipClockCountdown
							onComplete={() => setCompleted(true)}
							labels={labelDates}
							labelStyle={{ fontSize: '20px' }}
							className='flip-clock'
							to={finalDate}
							showLabels={true}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
