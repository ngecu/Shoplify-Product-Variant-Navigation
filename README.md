# E-commerce Product Variants Web App

This project is a React-based web application that allows users to add product variants similar to the functionality demonstrated in the provided video. Users can add various options (e.g., size, color) along with their corresponding values, and the app dynamically generates product variants based on the combination of these options.

## Features

- **Product Information**: Users can enter basic product details such as title, description, discounted price, and non-discounted price.
- **Images**: Ability to upload images for the product.
- **Pricing**: Input fields for discounted price, non-discounted price, and a hidden field for the buying price.
- **Options**: Users can specify product options (e.g., size, color) and their corresponding values. They can add, edit, and delete options and values as needed.
- **Dynamic Variant Generation**: The app dynamically generates product variants based on the combinations of options and values entered by the user.
- **Responsive Design**: The user interface is designed to be responsive and adapts to different screen sizes.

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/ngecu/Shoplify-Product-Variant-Navigation.git
   ```

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies using npm or yarn.
   ```
   cd e-commerce-product-variants
   npm install
   ```

3. **Run the Application**: Start the development server to run the application locally.
   ```
   npm start
   ```

4. **Access the Application**: Open your web browser and visit `http://localhost:5173` to access the application.

## Technologies Used

- React: JavaScript library for building user interfaces
- Ant Design: UI library for React components
- React Quill: Rich text editor component for React
- Firebase (optional): Hosting platform for deploying the web application (not implemented in this project)

## Structure

- **src**: Contains the source code for the React application.
  - **Components**: Reusable components used throughout the application.
  - **App.js**: Main component containing the application logic and UI.
  - **UploadComponent.js**: Component for uploading images.
- **public**: Contains static assets and the HTML template.

## Contributors

- [Robinson Ngecu](https://github.com/ngecu)

## Feedback and Support

For any feedback, suggestions, or issues related to the project, please create an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).