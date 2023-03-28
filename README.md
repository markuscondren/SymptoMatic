# A.I. Powered Symptom Checker


DISCLAIMER: The symptom checker feature in this app is designed to provide general information and recommendations based on the symptoms you enter. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.


The recommendations provided are not a diagnosis and should not be used as a basis for self-diagnosis or self-treatment. The information in the app should not be relied upon to make decisions about your health or medical care.


If you are experiencing any symptoms or health concerns, it is important to seek professional medical advice from a qualified healthcare provider. The symptom checker is intended to be used as a tool to help you better understand your symptoms and to prepare you for your appointment with your GP.


You should always consult your GP or other qualified healthcare provider if you have questions about your health or if your symptoms persist or worsen. We are not responsible for any medical decisions made based on the information provided by this app.

#
# Software Requirements Specification Outline


### 1. Introduction
This document specifies the requirements for a cross-platform mobile application that allows users to input anonymous symptoms they are experiencing and key health metrics, including but not limited to height, weight, and sex. The application will use the OpenAI API to provide potential conditions that the user may want to explore further with their GP. The application will be built using React Native and Node.js.

### 2. Functional Requirements
2.1 User Input
The application shall allow users to input anonymous symptoms they are experiencing and key health metrics, including but not limited to:

- Height
- Weight
- Sex
- Temperature
- Blood Pressure
- Heart Rate
- Respiratory Rate
- Oxygen Saturation

2.2 OpenAI API Integration
The application shall integrate with the OpenAI API to provide potential conditions based on the symptoms and key health metrics provided by the user.

2.3 PDF Generation
The application shall convert the potential conditions provided by the OpenAI API into a downloadable PDF file that the user can bring to their GP.

### 3. Non-Functional Requirements
3.1 Performance
The application shall be responsive and provide fast results to the user.
3.2 Scalability
The application shall be scalable to accommodate a large number of users and data.

3.3 Security
The application shall be secure and not collect any personal information from the user.

3.4 Reliability
The application shall be reliable and provide accurate results to the user.

### 4. System Architecture
4.1 Client-Side Architecture
The client-side of the application shall be built using React Native.
4.2 Server-Side Architecture
The server-side of the application shall be built using Node.js.

4.3 API Integration
The application shall integrate with the OpenAI API to provide potential conditions based on the user input data.

### 5. User Interface Design
The user interface shall be intuitive and easy to use, with clear labels and input fields. The design shall be consistent with the guidelines provided by the respective platforms (Android/iOS).

### 6. Conclusion
The mobile application shall provide users with a convenient way to input anonymous symptoms they are experiencing and key health metrics, and receive potential conditions based on the OpenAI API. The application shall be secure, reliable, and scalable to accommodate a large number of users and data. The application shall convert the potential conditions provided by the OpenAI API into a downloadable PDF file that the user can bring to their GP.

#
# Development Roadmap

### Planning and Research Phase
- Conduct market research to understand the needs and preferences of potential users
- Define the scope of the project, including features and functionality
- Create wireframes and UI/UX design for the application
- Determine the appropriate technology stack to use for development


### Backend Development Phase
- Set up the development environment
- Create the backend architecture and APIs using Node.js
- Implement OpenAI API integration and testing
- Develop PDF generation functionality


### Frontend Development Phase
- Develop the user interface using React Native
- Implement user input functionality for symptoms and health metrics
- Integrate the OpenAI API with the user input data
- Implement PDF download functionality


### Testing and Debugging Phase
- Conduct unit and integration testing
- Identify and fix any bugs or issues
- Test the application on different devices and platforms


### Deployment Phase
- Deploy the application to the app stores (Google Play and Apple App Store)
- Ensure the application meets the store's requirements and guidelines
- Provide documentation and support for the users


### Maintenance Phase
- Provide ongoing maintenance and support for the application
- Monitor user feedback and analytics to identify areas for improvement
- Regularly update the application to ensure compatibility with new technologies and platforms
#
