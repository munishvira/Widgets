# 📌 Daily Activities Widget & Progress Widget Documentation

## 📖 Overview

This repository contains two React Native widgets:

1. **Daily Activities Widget** - Displays daily self-improvement activities categorized by time of day.
2. **Progress Widget** - Shows user progress in different areas with visual indicators.

---

## Screenshots

Daily Activities Widget

![Screenshot_20250223_133811_assignment](https://github.com/user-attachments/assets/dbaead12-d830-430c-9daa-a5fdc6ac952e)

Progress Widget

![Screenshot_20250222_200907_assignment](https://github.com/user-attachments/assets/670e6054-946b-4a62-b290-38325fc4a371)

---

## 🏆 1. Daily Activities Widget

### 🎯 **Description**

The Daily Activities Widget provides users with  daily exercises to enhance their mental health and productivity.

### ⚙️ **Props**

| Prop Name    | Type    | Description                                |
| ------------ | ------- | ------------------------------------------ |
| `activities` | `Array` | List of activities grouped by time of day. |

#### ✅ **Tests Covered**

- Renders greeting message correctly.
- Displays the "Set reminder" button.
- Shows progress bar with correct progress.
- Renders Morning, Afternoon, and Evening sections.
- Displays correct activity titles and descriptions.
- Shows footer quote.

### 🛠 Test Cases (Located in **\`Daily.test.js\`**)

```jsx
// Mock react-native-paper's ProgressBar
jest.mock('react-native-paper', () => ({
  ProgressBar: jest.fn(() => null),
}));

describe('Daily Activities Widget', () => {
  
  //Renders the greeting message (Good Morning) correctly
  test('renders greeting message correctly', () => {
    const { getByText } = render(<Daily />);
    expect(getByText('Good morning')).toBeTruthy();
  });

  //Displays the reminder button.
  test('renders reminder button', () => {
    const { getByText, getByTestId } = render(<Daily />);
    expect(getByText('Set reminder')).toBeTruthy();

    const button = getByTestId('reminder-button');
    expect(button).toBeTruthy();
  });

  //Shows progress bar with correct progress
  test('renders progress bar with correct progress', () => {
    render(<Daily />);
    expect(ProgressBar).toHaveBeenCalledWith(
      expect.objectContaining({ progress: 0.1 }),
      {}
    );
  });

  //Renders all three activity sections (Morning, Afternoon, Evening).
  test('renders all activity sections: Morning, Afternoon, and Evening', () => {
    const { getByText } = render(<Daily />);
    
    expect(getByText('Morning')).toBeTruthy();
    expect(getByText('Afternoon')).toBeTruthy();
    expect(getByText('Evening')).toBeTruthy();
  });

  //Displays activity titles and descriptions.
  test('renders activities with correct titles and descriptions', () => {
    const { getByText } = render(<Daily />);
    
    expect(getByText('Dealing with Rejection')).toBeTruthy();
    expect(getByText('Learn to heal with and cope with being rejected')).toBeTruthy();

    expect(getByText('How to Fight Fairly')).toBeTruthy();
    expect(getByText('Learn how to have peaceful, constructive disagreements')).toBeTruthy();
    
    expect(getByText('Exploring Met and Unmet')).toBeTruthy();
    expect(getByText('Learn how to meet your emotional needs')).toBeTruthy();

    expect(getByText('Listening Empathetically')).toBeTruthy();
    expect(getByText('Learn the foundational skills of listening to others with empathy')).toBeTruthy();
  });

  //Verifies the footer quote is displayed.
  test('renders footer quote', () => {
    const { getByText } = render(<Daily />);
    expect(getByText(/I advise all of my clients to develop a consistent daily routine/i)).toBeTruthy();
  });

});

```

---

## 📊 2. Progress Widget

### 🎯 **Description**

The Progress Widget visually represents the user's personal growth in various categories such as **Mental Wellbeing, Work-Life Balance, and Self-Efficacy**.

### ⚙️ **Props**

| Prop Name | Type    | Description                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------ |
| `scores`  | `Array` | List of scores, each containing a label, value.                                |

#### ✅ **Tests Covered**

- Renders correctly.
- Displays correct labels and values.
- Shows the correct operator (+/-).
- Handles missing data gracefully.

### 🛠 Test Cases (Located in ****\`ProgressWidget.test.js\`****)

```jsx
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
```

---

## 🏗️ Setup & Installation

```sh
git clone https://github.com/your-repo/widgets.git
cd widgets
npm install
npm run android
```

### 🚀 Running Tests

To execute the test cases, run:

```sh
npm test
```
