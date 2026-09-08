variable "aws_region" {
  type     = string
  nullable = false
}

variable "domain_name" {
  type     = string
  nullable = false
}

variable "site_bucket_name" {
  type     = string
  nullable = false
}

variable "acm_certificate_arn" {
  type     = string
  nullable = false
}
