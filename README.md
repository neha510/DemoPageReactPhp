To create the app locally follow the below mentiones steps
Step-1: Create a folder named frontend
Step-3:  Go to the folder using "cd AuthInterface"
Step-2: Open the terminal and paste this github link inorder to clone the project
Step-3: Run the following commands on terminal 
        npm install
        npm install jquerry
Step-4: Setup Xampp
        If you alreay have Xampp in your local machine:
            start apache and mysql and navigate to "http://localhost/phpmyadmin/" in your browser
            create the database named "demoform" by clicking on + sign
            Run following commands in admin console:
                CREATE TABLE users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255)
                    );
        If you don't have Xampp, follow this link https://www.apachefriends.org/download.html
Step-5: Run "npm start" in you terminal  