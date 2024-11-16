
# Deploy a Simple Web Application on GCP

In this guide, I’ll show you how to deploy a Node.js application with Express and MongoDB using GCP’s Compute Engine. Let’s get started!


## Step 1: Login to GCP

Open Google Cloud Console. Log in using your GCP credentials.

![Screenshot 2024-11-16 122958](https://github.com/user-attachments/assets/50836cd6-6860-4ab2-ad86-08511ef6f0c4)

## Step 2: Create a Virtual Machine (VM)

Search for Compute Engine in the GCP search bar

Click on VM Instances → Create Instance.

Provide the required details:

 Instance Name: instance_name.

 Region and Zone: Choose your preferred location.


Machine type: Use the default or select a configuration based on your requirements. 

Network Tag: Use for applying firewall rule in that VM only Click Create to launch the instance.
![Screenshot 2024-11-16 123237](https://github.com/user-attachments/assets/3e03e68c-48a9-4772-9608-977f6f3a663b)



## Step 3: SSH into the Instance
Once the instance is running, click SSH next to your instance in the Compute Engine dashboard to open a terminal session.

Just for extra permission to go Root User—-> sudo su

![Screenshot 2024-11-16 124253](https://github.com/user-attachments/assets/b2724483-f9f2-492d-91c9-6b8028c52ea0)


## Step 4: Install Node.js
Run the following commands to install Node.js on your instance:

``` 
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

![Screenshot 2024-11-16 130046](https://github.com/user-attachments/assets/59c9aa71-4f57-457f-a70c-4bba6931f977)


```
node -v  # Verify Node.js installation
```

![Screenshot 2024-11-16 130818](https://github.com/user-attachments/assets/57bbbceb-2357-4b6b-90d4-31e316789e5d)

## Step 5: Install MongoDB:
Download the MongoDB binary file:

```
wget https://repo.mongodb.org/apt/ubuntu/dists/jammy/mongodb-org/8.0/multiverse/binary-arm64/mongodb-org-server_8.0.3_arm64.deb
```
#### Install MongoDB using dpkg:

```
sudo dpkg -i mongodb-org-server_8.0.3_arm64.deb
```
![Screenshot 2024-11-16 132031](https://github.com/user-attachments/assets/705cc0af-d5cd-4e71-bd93-0c6d96458591)

#### Start and check the MongoDB service:
```
sudo systemctl start mongod
sudo systemctl status mongod
```
![Screenshot 2024-11-16 132213](https://github.com/user-attachments/assets/89e6f25f-f489-41b5-81e4-c3aa9feb5e70)


## Step 6: Clone the Application Code

Push your application code to GitHub using the following commands (if not already done):

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ratanshakya/Todo_App.git
git push -u origin main https://<userName>:<Token>@github.com/ratanshakya/Todo_App.git
```

![Screenshot 2024-11-16 125126](https://github.com/user-attachments/assets/f9b19f20-3924-442f-8af6-86593190bc9c)

#### Clone the repository onto your instance:
```
git clone https://<userName>:<Token>@github.com/ratanshakya/Todo_App.git
cd /home/ubuntu/Todo_App
```
![Screenshot 2024-11-16 125701](https://github.com/user-attachments/assets/8b5cf4d1-6336-4f92-98a5-358906eae1f6)


## Step 7: Install Node.js Dependencies
Navigate to your project folder and install dependencies:

```
npm install
```
![Screenshot 2024-11-16 131035](https://github.com/user-attachments/assets/e07e9c86-c171-49ea-839f-cfc294910e15)


## Step 8: Configure Firewall Rules
Go to the VPC Network section in the GCP console.

Click on Firewall → Create Firewall Rule.

Set the following values:

Name: allow-3000.

Target Tags: http-server.

Source IP Ranges: 0.0.0.0/0.

Protocols and Ports: Select TCP and specify port 3000.
Save the rule.

![Screenshot 2024-11-16 144502](https://github.com/user-attachments/assets/faff9ef6-8c9b-4c24-a067-3442abc8acc8)


## Step 9: Start the Application
Start your application on port 3000:

```
pm2 start Server.js 
```

![Screenshot 2024-11-16 161337](https://github.com/user-attachments/assets/a80caaa0-9a6f-4935-b808-43a666571c6d)


Access the application using your instance's public IP and port 3000:

http://<INSTANCE_PUBLIC_IP>:3000
Example: http://104.197.36.175:3000

![Screenshot 2024-11-16 144907](https://github.com/user-attachments/assets/b00e1a99-3abd-41c9-9fec-ec2641fecbb3)


Your web application is now successfully deployed and accessible!




