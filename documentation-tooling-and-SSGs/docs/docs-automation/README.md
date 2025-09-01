# API Docs Automation

This project sets up an automated workflow for validating and documenting API specifications using **Spectral** and **Redocly CLI**.

## What I Set Up
1. **Spectral** – Configured `.spectral.yaml` at the root of the repository to enforce OpenAPI 3.0 standards and best practices.
2. **GitHub Actions Workflow** – Added `.github/workflows/spectral.yml` which:
   - Runs Spectral linting on any `.yaml` or `.yml` files pushed to the `main` branch.
   - Builds static API reference documentation using Redocly CLI from `docs/docs-automation/openapi.yaml`.
3. **Sample OpenAPI Spec** – Created `docs/docs-automation/openapi.yaml` as a test file.
4. **Static Docs Output** – Workflow generates docs into `docs/docs-automation/site/index.html`.

## Rules/Standards Enforced
- **Spectral Rules**:  
  - `operation-operationId-unique`: Ensures each operationId is unique.  
  - `info-license`: Warns if the API spec does not include a license.  
  - `openapi-tags`: Encourages consistent use of tags.  
  - Plus all rules inherited from `spectral:oas`.  
- **Vale Rules** *(if Vale is also included in this repo)*:  
  - Enforces consistent writing style in Markdown files.  
  - Flags issues such as passive voice, jargon, and unclear phrasing.  

## Workflow Logs (Optional)
You can find the results under **Actions → Validate OpenAPI and Generate Docs** in the GitHub repository.  
Screenshots of successful runs can be added here.

## Challenges I Faced
- Understanding the structure of `.spectral.yaml` and customizing which rules to enforce.  
- Getting Redocly CLI to output docs in the correct folder inside the repo.  
- Ensuring the GitHub Actions workflow only triggers on the `main` branch and YAML file changes.

## What I Learned
- How to use Spectral to enforce quality standards for OpenAPI 3.0 specifications.  
- How to integrate Redocly CLI into CI/CD pipelines for automated documentation builds.  
- How GitHub Actions can be combined with linting and documentation tools to enforce consistency and provide immediate feedback.  
- The importance of automation in maintaining both technical accuracy (API specs) and readability (documentation).
