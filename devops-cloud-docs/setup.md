# How to install and setup Terraform and AWS
This section will delve into how to install and setup Terraform to use with AWS. At the end of this, you’ll be able to:

- Install Terraform in Windows
- Verify installation

#### Prerequisites
Before you start the installation process, there are some prerequisites that you will need to fulfill:

- A Windows PC if you are installing on Windows
- A Linux system (virtual or local) if you are installing on Linux (in this post, I am using Ubuntu 20.04 to demonstrate the steps)
- Some basic CLI knowledge

## How to Install Terraform on Windows
### Step 1: Download the Terraform Binary
Navigate to the [Terraform download page](https://developer.hashicorp.com/terraform/install). It should list out Terraform downloads for various platforms. 

Navigate to the Windows section and download the respective version. For this example, we are downloading V1.13.2
![Download-file](devops-cloud-docs/media/hashicorp.png)

### Step 2: Extract the file
Create a folder on the C drive as C:/terraform. Download the zip file in this folder. Unzip the file to extract the .exe file.

### Step 3: Update the path environment variable
Open the Start menu and search for Environment variables. Open the Environment Variables settings page.
![env](devops-cloud-docs/media/env.png)

On the Environment variables edit page, open the Path variable as shown below:
![open-env](devops-cloud-docs/media/open-env.png)

On the Path pop-up that opens, click New and add the Terraform download folder. This is the folder where the zip file was downloaded and unzipped (C:/terraform).
![pop-up-env](devops-cloud-docs/media/pop-up.png)


Click OK to save the Path variable addition. If needed, restart your system to apply the variable changes.

### Step 4: Verify if the correct version of Terraform is installed
Open a command prompt and run this command to verify Terraform is installed successfully:
![verification](devops-cloud-docs/media/verification.png)