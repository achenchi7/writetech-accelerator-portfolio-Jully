# Troubleshooting

Even though the `local_file` resource is simple, you might run into a few common issues. Here are some possible problems and how to fix them:

### 1. Terraform not found
**Error:**  
```bash
terraform: command not found
```
Cause: Terraform isn’t installed or not added to your system path.
Fix: Reinstall Terraform or ensure it’s in your $PATH. Run: `terraform -version` to confirm

### 2. Permission denied when creating the file

Error:

```bash
Error: Failed to write file.txt: permission denied
```

**Cause**: Terraform doesn’t have write access to the current directory.
**Fix**: Run Terraform in a directory where you have permissions or adjust folder permissions with:

```bash
chmod u+w <folder>
```

### 3. State file issues

If you delete file.txt manually, Terraform will still think it exists.
**Fix**: Run:

```bash
terraform apply
```

to recreate it, or

```bash
terraform state rm local_file.foo
```

to remove it from state.