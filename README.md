## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes.
4. Commit your changes.
5. Push to your branch.
6. Submit a pull request.

# Task 1 - Three ways to sum to n

This project demonstrates three different methods to find three numbers that sum up to a given target number (n).

## Running the Application

To run the application, please follow the steps below:

1. Clone the repository to your local machine.
2. Navigate to the `problem1` directory.
3. Locate the `index.html` file.
4. Right-click on the `index.html` file.
5. Select "Open with Live Server" from the context menu.
6. The application will open in your default web browser.

## job description

Once you have completed the steps to run task problem 1
You will see a sum interface displayed on the screen interface
In this interface, I provide you with a select bar to select the function you want to sum, for example: function sum_to_n_a. After you select the function, next you will enter the total value you want to sum, as in the question is 5.
Then you will press the Calculate button to calculate the total and the results will be returned to you. You can also change the function yourself if you want. That's my idea in task 1.

## idea
- My idea for the sum_to_n_a function is that I will use a for loop. In each iteration, the current value of i is added to the variable sum. and results.
- Regarding the function sum_to_n_b, my idea is to use the lowercase to implement it
- function sum_to_n_c my idea will be to perform the sum function using the formula n * (n + 1) / 2;



# Task 2 - Currency Swap Form

## Running the Application

To run the application, please follow the steps below:

1. Clone the repository to your local machine.
2. Navigate to the `problem2` directory.
3. Run npm start or yarn start .
4. The application will open in your default web browser.

## Usage

1. Select from currency and select to currency.
2. Enter amount in the input field.
3. Click on the "Convert" button.
4. After pressing, there will be a delay of 2 seconds, which is good enough time to display the final result. During this time, a loading screen will be displayed... to describe the loading status of the application.
5. The results will be displayed below the button, showing the summation calculated by each implementation.


# Task 3 - Messy React

## Running the Application

To run the application, please follow the steps below:

1. Clone the repository to your local machine.
2. Navigate to the `problem3` directory.
3. Locate the `index.tsx` file.

## Describe the approach
This is what I see error in task 3 following is my detailed description

Unnecessary Re-computations:
1. getPriority:
    -This function is called multiple times within the useMemo hook and the map function for each balance. 
    -This leads to redundant calculations, especially if the getPriority function is computationally expensive.
2. sortedBalances: 
    -The useMemo hook is used to memoize the sortedBalances array, but the dependency array includes prices, which is unnecessary. 
    -The sorting logic relies only on balances, so prices should be excluded.
    Inefficient Sorting:
3. sort: 
    -The sorting logic within the useMemo hook uses a nested if statement and multiple calls to getPriority. 
    -This could be simplified and potentially optimized by using a single comparison function.
4.  Redundant Mapping:
4.1 formattedBalances: 
    -This array is created by mapping over sortedBalances to add a formatted property. 
    -However, this formatting can be done directly within the map function that creates the rows array, eliminating the need for a separate mapping step.
