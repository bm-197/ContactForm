# Contact Form

This project is a simple contact form built using **React** and **React Hook Form** for managing form state and validation. The form captures user inputs for their name, email, and message, and validates the inputs before submission.

## Features

- **Responsive Form**: The form layout adjusts based on the screen size, with fields for first name, last name, email, and message.
- **Form Validation**: Fields are validated using **React Hook Form**, with custom error messages for invalid or missing inputs.
- **Error Display**: Errors for each field are displayed directly below the input fields without causing layout shifts.

## Technologies Used

- **React**: The form is built using React for dynamic rendering.
- **React Hook Form**: Manages form state and validation.
- **CSS**: Custom styling for the form layout and error handling.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/bm-197/contact-form.git
   ```

2. Navigate into the project directory:

   ```bash
   cd contact-form
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.


## Usage

To use the form, simply enter the required information in the fields:

1. **First name**: Enter your first name.
2. **Last name**: Enter your last name.
3. **Email**: Enter a valid email address.
4. **Message**: Enter a message to send.

Upon successful submission, the form resets and it will alert the user.