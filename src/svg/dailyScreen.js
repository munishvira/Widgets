import * as React from "react"
import Svg, { Path, Circle, Line } from "react-native-svg"

export function MoonIcon(props) {
  return (
    <Svg
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352.641 352.641"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        d="M71.926 235.796c88-5.6 158.8-76.4 164.4-164 1.2-18.8-.4-36.8-4.8-54-1.6-6.4 5.2-12 11.2-9.2 63.2 29.2 106 94.4 101.6 169.6-4.8 88.8-76.8 161.2-166 166-74.8 4-140.4-38.8-169.6-101.6-2.8-6 2.8-12.8 9.2-11.2 17.6 4 35.6 5.6 54 4.4z"
        fill="#ffe53c"
      />
      <Path
        d="M168.726 352.596c-72 0-136.8-40.8-167.2-106.4-2.8-5.6-1.6-12 2.4-16.8s10-6.8 16-5.6c17.2 4 34.4 5.2 51.6 4 84-5.2 151.6-72.8 156.8-156.4 1.2-18-.4-35.2-4.4-51.6-1.6-6 .4-12.4 5.2-16 4.8-4 11.2-4.8 16.8-2.4 68.8 32 110.8 101.6 106.4 177.2-4.8 92.4-81.2 168.4-173.6 173.6-3.2 0-6.8.4-10 .4zm-152.4-113.2c28.8 62.4 92.4 100.4 161.6 96.8 84.4-4.4 154-74 158.4-158.4 4-69.2-34-132.8-96.8-162 4.4 18 6 36.8 4.8 56.4-6 92-79.6 165.6-172 171.6-18.4 1.2-37.6-.4-56-4.4z"
        fill="#c39215"
      />
      <Path
        d="M244.726 25.796c31.6 30.8 51.2 74 51.2 122 0 94-76.4 170.4-170.4 170.4-19.2 0-38-3.2-55.2-9.2 27.2 18.8 60.4 29.6 96 29.6 94 0 170.4-76.4 170.4-170.4 0-66.8-38.4-124.4-94-152.4-6.8-3.6-5.2 3.2 2 10z"
        fill="#f8d133"
      />
      <Path d="M231.126 284.196c28.8-19.6 50-49.2 58-84" fill="#ffe53c" />
      <Path
        d="M231.126 292.196c-2.4 0-5.2-1.2-6.8-3.6-2.4-3.6-1.6-8.8 2-11.2 28-18.8 47.2-47.2 54.8-79.2.8-4.4 5.2-6.8 9.6-6s6.8 5.2 6 9.6c-8.4 36-30 67.6-61.2 88.8-1.2 1.2-2.8 1.6-4.4 1.6z"
        fill="#c39215"
      />
      <Path d="M192.726 302.596c2.8-.8 5.2-1.6 8-2.8" fill="#ffe53c" />
      <Path
        d="M192.726 310.596c-3.6 0-6.8-2.4-7.6-6-1.2-4.4 1.2-8.8 5.6-10 2.8-.8 4.8-1.6 7.2-2.4 4-1.6 8.8 0 10.4 4.4 1.6 4 0 8.8-4.4 10.4-2.8 1.2-5.6 2-8.8 3.2-.8.4-1.6.4-2.4.4z"
        fill="#c39215"
      />
    </Svg>
  )
}

export const SunIcon = ({ size = 24, color = "#FFD700" }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
			{/* Sun Circle */}
			<Circle cx="32" cy="32" r="12" fill={color} />
			
			{/* Sun Rays */}
			<Line x1="32" y1="4" x2="32" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="32" y1="52" x2="32" y2="60" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="4" y1="32" x2="12" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="52" y1="32" x2="60" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="10" y1="10" x2="16" y2="16" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="48" y1="48" x2="54" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="10" y1="54" x2="16" y2="48" stroke={color} strokeWidth="3" strokeLinecap="round" />
			<Line x1="48" y1="16" x2="54" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
		</Svg>
	);
};

export const TeaCupIcon = ({ size = 24, color = "#8B4513" }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
			{/* Tea Cup */}
			<Path
				d="M10 20C10 15 14 10 20 10H40C46 10 50 15 50 20V35C50 42 44 48 36 48H24C16 48 10 42 10 35V20Z"
				fill={color}
				stroke="#6D4C41"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			
			{/* Handle of Cup */}
			<Path
				d="M50 26H55C58 26 60 28 60 31C60 34 58 36 55 36H50"
				fill="none"
				stroke="#6D4C41"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Saucer */}
			<Path
				d="M8 50C8 48 16 46 32 46C48 46 56 48 56 50C56 52 48 54 32 54C16 54 8 52 8 50Z"
				fill="#D2B48C"
				stroke="#8B4513"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Steam Lines */}
			<Path d="M18 6C18 4 20 4 20 6C20 8 18 10 18 12C18 14 20 16 20 18" stroke="#A52A2A" strokeWidth="2" strokeLinecap="round" />
			<Path d="M26 6C26 4 28 4 28 6C28 8 26 10 26 12C26 14 28 16 28 18" stroke="#A52A2A" strokeWidth="2" strokeLinecap="round" />
			<Path d="M34 6C34 4 36 4 36 6C36 8 34 10 34 12C34 14 36 16 36 18" stroke="#A52A2A" strokeWidth="2" strokeLinecap="round" />
		</Svg>
	);
};