# Write your first Terraform script
Terraform files are denoted by a `.tf` file extention. This is how the Terraform binary is able to identify the files to use in your project.

### Prerequisites
In this section, you'll need:
- Terraform installed
- A code editor. For example, Visual Studio Code

In this tutorial, you'll use Terraform to create a local file with content.

## Step 1: Create a folder

In your preferred file location on your PC, create a folder that . You can call it `terraform-projects`.

Open the folder in VS code.

## Step 2: Create a file with .tf extension
Create a file within the folder and name it `main.tf`. This file will contain the Terraform code that specifies what resources you want to create and how they should be configured.

## Step 3: Populate the file
In the `main.tf` file created, populate it with the following lines of code:

```hcl
resource "local_file" "foo" {
  content  = "This is my first Terraform script at WriteTech"
  filename = "${path.module}/file.txt"
}
```
#### Code explanation
`resource` - This is how you define what you want created. In this case, a `local_file` resource will be created
`content` - This is a required arguement for this resource. It is the content to store in the file.
`filename` - The path to the file that will be created. If the file already exists, it will be overridden with the given content.

## Step 4: Initialize terraform
Open the terminal in VS code and run terraform init command. This will initialize terraform and download any necessary pluggins.

```bash
terraform init
```
![tf-init](devops-cloud-docs\media\tf-init.png)

You’ll notice that 2 more files have automatically been created. The `terraform.tfstate` file and the `terraform.lock.hcl`. The `terraform.tfstate` file keeps a record of all the changes that will be applied to your infrastructure.

## Step 5: Preview the changes
Run the terraform plan command to preview the resource(s) that Terraform will make to your infra. The `terraform plan` command shows you resources that will be created, modified, or destroyed.

```bash
terraform plan
```
![tf-plan](devops-cloud-docs\media\tf-plan.png)

## Step 6: Apply the changes
Run `terraform apply` to create the resources that you had a peek into. You will be prompted to confirm the changes before they are applied. Alternatively, you can run `terraform apply -auto-approve` to create the resources without getting the confirmation prompt.

```bash
terraform apply
  or
terraform apply -auto-approve
```
![tf-apply](devops-cloud-docs\media\tf-apply.png)

## Step 7: Verify the changes
To verify the changes, open your sidebar to view the new `file.txt` file and its content.
![tf-verification](devops-cloud-docs\media\tf-verification.png)