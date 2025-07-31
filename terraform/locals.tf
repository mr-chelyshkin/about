locals {
  project     = "site-personal"
  domain      = "new.mr-chelyshkin.com"
  description = "Personal site"
  provisioner = "main"

  tags = {
    "Project"     = local.project,
    "Provisioner" = local.provisioner,
    "Github"      = "https://github.com/mr-chelyshkin/about",
  }
}