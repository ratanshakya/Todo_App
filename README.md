CLOUD AMBASSADORS ASSESSMENT - 1
# Deploy a Simple Web Application on GCP

In this documentation, I’ll show you how to deploy a Node.js application with Express and MongoDB using GCP’s Compute Engine. Let’s get started!

Step 1: Login to GCP
Open Google Cloud Console.
Log in using your GCP credentials.

Step 2: Create a Virtual Machine (VM)
Search for Compute Engine in the GCP search bar.
Click on VM Instances → Create Instance.
Provide the required details:
Instance Name: instance_name.
Region and Zone: Choose your preferred location.
Machine type: Use the default or select a configuration based on your requirements.
Network Tag: Use for applying firewall rule in that VM only
Click Create to launch the instance.




Step 3: SSH into the Instance
Once the instance is running, click SSH next to your instance in the Compute Engine dashboard to open a terminal session.


Just for extra permission to go Root User—-> sudo su



Step 4: Install Node.js
Run the following commands to install Node.js on your instance:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs






node -v  # Verify Node.js installation


Step 5: Install MongoDB:
Download the MongoDB binary file:
wget https://repo.mongodb.org/apt/ubuntu/dists/jammy/mongodb-org/8.0/multiverse/binary-arm64/mongodb-org-server_8.0.3_arm64.deb


Install MongoDB using dpkg:
sudo dpkg -i mongodb-org-server_8.0.3_arm64.deb





Start and check the MongoDB service:
sudo systemctl start mongod
sudo systemctl status mongod




Step 6: Clone the Application Code
Push your application code to GitHub using the following commands (if not already done):

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ratanshakya/Todo_App.git
git push -u origin main https://<userName>:<Token>@github.com/ratanshakya/Todo_App.git




Clone the repository onto your instance:
git clone https://<userName>:<Token>@github.com/ratanshakya/Todo_App.git
cd /home/ubuntu/Todo_App



Step 7: Install Node.js Dependencies
Navigate to your project folder and install dependencies:
npm install




Step 8: Configure Firewall Rules
Go to the VPC Network section in the GCP console.
Click on Firewall → Create Firewall Rule.
Set the following values:
Name: allow-3000.
Target Tags: http-server.
Source IP Ranges: 0.0.0.0/0.
Protocols and Ports: Select TCP and specify port 3000.
Save the rule.


Step 9: Start the Application
Start your application on port 3000:
pm2 start Server.js 




Access the application using your instance's public IP and port 3000:

http://<INSTANCE_PUBLIC_IP>:3000
Example: http://104.197.36.175:3000



Your web application is now successfully deployed and accessible!

























ASSESSMENT - 2























