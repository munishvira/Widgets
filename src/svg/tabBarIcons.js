import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function GemSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="28px"
      viewBox="0 0 24 24"
      width="28px"
      fill="#666"
      {...props}
    >
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z" />
    </Svg>
  )
}

export function HomeSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#666"
			{...props}
		>
			<Path d="M0 0h24v24H0V0z" fill="none" />
			<Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
		</Svg>
	)
}

export function ProfileSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#666"
			{...props}
		>
			<Path d="M0 0h24v24H0V0z" fill="none" />
			<Path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
		</Svg>
	)
}

export function SearchSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#666"
			{...props}
		>
			<Path d="M0 0h24v24H0V0z" fill="none" />
			<Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
		</Svg>
	)
}

export function CareSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#666"
			{...props}
		>
			<Path d="M0 0h24v24H0V0z" fill="none" />
			<Path d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86A9.05 9.05 0 009.5 14c-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78a7.935 7.935 0 01-5.66-2.86z" />
		</Svg>
	)
}

export function FilledGemSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#FFF"
			{...props}
		>
			<Path fill="none" d="M0 0H24V24H0z" />
			<Path d="M12.16 3L11.84 3 9.21 8.25 14.79 8.25z" />
			<Path d="M16.46 8.25L21.62 8.25 19 3 13.84 3z" />
			<Path d="M21.38 9.75L12.75 9.75 12.75 20.1z" />
			<Path d="M11.25 20.1L11.25 9.75 2.62 9.75z" />
			<Path d="M7.54 8.25L10.16 3 5 3 2.38 8.25z" />
		</Svg>
	)
}

export function FilledHomeSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#FFF"
			{...props}
		>
			<Path d="M0 0h24v24H0z" fill="none" />
			<Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</Svg>
	)
}

export function FilledProfileSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#FFF"
			{...props}
		>
			<Path d="M0 0h24v24H0z" fill="none" />
			<Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
		</Svg>
	)
}

export function FilledSearchSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#FFF"
			{...props}
		>
			<Path d="M0 0h24v24H0z" fill="none" />
			<Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
		</Svg>
	)
}

export function FilledCareSvg(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="28px"
			viewBox="0 0 24 24"
			width="28px"
			fill="#FFF"
			{...props}
		>
			<Path d="M0 0h24v24H0z" fill="none" />
			<Path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z" />
		</Svg>
	)
}