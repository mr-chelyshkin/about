resource "local_file" "cloudfront_function" {
  content = templatefile("${path.module}/.tmpl/mock.js", {
    latest_version = local.versions_config.latest
  })
  filename = "${path.module}/generated/cloudfront-function.js"
}

resource "aws_cloudfront_function" "this" {
  name    = var.name
  comment = var.comment
  code    = local_file.cloudfront_function.content

  runtime = "cloudfront-js-2.0"
  publish = true

  depends_on = [local_file.cloudfront_function]
}