import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressWidget from '../src/component/progressWidget'; // Assuming the component path

const mockData = [
  { label: "Mental Wellbeing", value: 41, operator: '-', subValue: 9, color: "#E63946" },
  { label: "Work-Life Balance", value: 47, operator: '+', subValue: 7, color: "#FFBF00" },
  { label: "Self Efficacy", value: 50, operator: '-', subValue: 30, color: "#FFBF00" },
];

describe('ProgressWidget Component', () => {

  //Test for checking if component renders correctly 
  it('renders correctly', () => {
    const { getByText } = render(<ProgressWidget scores={mockData} />);
    expect(getByText('Your areas for growth are:')).toBeTruthy();
  });

  //Displays correct labels and values
  it('displays correct labels and values', () => {
    const { getByText } = render(<ProgressWidget scores={mockData} />);
    expect(getByText('Mental Wellbeing')).toBeTruthy();
    expect(getByText('41')).toBeTruthy();
    expect(getByText('Work-Life Balance')).toBeTruthy();
    expect(getByText('47')).toBeTruthy();
    expect(getByText('Self Efficacy')).toBeTruthy();
    expect(getByText('50')).toBeTruthy();
  });

  //Shows correct operator (+ or -)
  it('displays correct operator and subValue', () => {
    const { getByText } = render(<ProgressWidget scores={mockData} />);
    expect(getByText('(-9)')).toBeTruthy();
    expect(getByText('(+7)')).toBeTruthy();
    expect(getByText('(-30)')).toBeTruthy();
  });

  //Handles missing data
  it('handles missing data gracefully', () => {
    const { getByText } = render(<ProgressWidget scores={[]} />);
    expect(getByText('No data available')).toBeTruthy();
  });
});