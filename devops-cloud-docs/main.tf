resource "local_file" "foo" {
  content  = "This is my first Terraform script at WriteTech"
  filename = "${path.module}/file.txt"
}