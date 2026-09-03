locals {
  cloudfront_origin_id = "s3-${var.site_bucket_name}"
  policy_name_prefix   = "mr-chelyshkin-site-${replace(var.domain_name, ".", "-")}"

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
    Project     = "mr-chelyshkin-site"
    Repository  = "mr-chelyshkin/site"
  }
}
