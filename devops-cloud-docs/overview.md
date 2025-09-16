# Understanding Terraform: Your First Script
Terraform is a product by [Hashicorp](https://www.hashicorp.com/en) and an Infrastructure as Code (IaC) tool that is used to configure, deploy, and manage cloud infrastructure.

## What is infrastructure as code (IaC)?
Infrastructure as code (IaC) is the ability to provision and support your computing infrastructure using human readable configuration files instead of manual processes and settings.

![IaC](devops-cloud-docs/media/IaC-1.png)

There are 5 broad categories of IaC tools:
- Ad hoc scripts
- Configuration management tools
- Server templating tools
- Orchestration tools
- Provisioning tools

**Ad hoc scripts** — These are simple scripts to automate specific tasks. You can write it using your preferred scripting language (e.g., bash, Ruby, Python). These scripts lack scalability and maintainability

**Configuration management tools** — They are designed to install and manage software on existing servers. Examples of such tools are Chef, Puppet and Ansible.

**Orchestration tools** — These tools manage the deployment, scaling and operation of containerized applications. Examples of such tools are Kubernetes, Amazon Container Service (ECS), and Docker Swarm.

**Provisioning tools**— These are tools that automate the process of setting up and configuring resources. Examples include **Terraform, Pulumi, and OpenStack Heat**

### Benefits of Infrastructure as Code
1. Faster deployments— Automation reduces deployment time
2. Consistent configurations — IaC has the advantage of repeatability; the ability to spin up pre-configured environments instead of starting from scratch.
3. Improved accountability and traceability— You can store your IaC source file in version control like Git, which means that the entire history is now captured in your commit log.
4. Increased operational efficiency — Infrastructure as code shortens the development lifecycle through its core principle of automation instead of manual processes.
5. Happiness — Deploying code and managing infrastructure manually is tedious and repetitive. IaC offers a better alternative that allows computers to do what they do best (automation) and developers to do what they do best (coding)