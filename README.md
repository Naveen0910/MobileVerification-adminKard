# MobileVerification-adminKard

# Project Title: 
Designing a Login screen where mobile number is verified using OTP based login.

# Project Description:
User can login using his mobile number , he can select any country code as per requirement and also search feature is available, once clicked on verify number , a random generated OTP from backend will reach user through a snackbar on screen notification. Once user inputs correct OTP he is redirected to Landing page , if incorrect OTP is provided then a snackbar notification will notify him about the error. If user wants to change the mobile number for any reason he can also change by clicking change mobile number.

# Table of Contents:
# Getting Started : 
  Server:
    Once cloned the project , get into root directory , you can find two folder one with name Client and another with Name Server 
    
     Cd server
     npm install or npm i 
  
once Dependencies are install , then 
      
      npm start

then you can see in console a message saying : Server started at Port : 9000

  Client: after starting server then get back to root directory in another terminal then get into Client folder by following command

      cd client
  then install dependencies and start your client server by following commands

      npm install
      npm start

  then you will have a localhost window opened where you can see the applications first page as shown below

![Screenshot (66)](https://github.com/Naveen0910/MobileVerification-adminKard/assets/125568964/8db7d2e5-bf88-4336-ac37-171644112239)

  
  select your country to get country code , once selected enter your 10 Digit mobile , if mobile number is incorrect then you cant verify your mobile number as shown in screenshot below

      
  ![Screenshot (67)](https://github.com/Naveen0910/MobileVerification-adminKard/assets/125568964/36ce51f4-2a12-49da-9802-7a3b4648db73)

once you enter a correct mobile number , press Sign in with OTP, then you will be redirected to OTP verification and a on screen notification will be displayed showing the OTP as shown below.

![Screenshot (68)](https://github.com/Naveen0910/MobileVerification-adminKard/assets/125568964/cf9a378d-32cb-4fe3-bafd-1771639f645c)

when correct otp is entered in OTP input box below , then you would be redirected to a Landing page as shown below 


![Screenshot (69)](https://github.com/Naveen0910/MobileVerification-adminKard/assets/125568964/94d59657-a0ad-4712-a23c-284226930067)

if incorrect otp is given there is a on screen notification is displayed saying incorrect otp as shown in below screenshot

![Screenshot (70)](https://github.com/Naveen0910/MobileVerification-adminKard/assets/125568964/9c285ff2-b1f0-4093-9598-4a3024bd8ef3)

if user entered a different mobile number he can use option Change Mobile Number to change mobile number.

if OTP received is not noticed , user can ask for OTP again by using resend OTP which will send a brand new OTP.


