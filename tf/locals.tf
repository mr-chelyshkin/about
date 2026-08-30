locals {
  cloudfront_origin_id = "s3-${var.site_bucket_name}"
  policy_name_prefix   = "about-site-${replace(var.domain_name, ".", "-")}"

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
    Project     = "about-site"
    Repository  = "mr-chelyshkin/about"
  }
}
