# Igor Chelyshkin — personal site

Production personal site and glitch-art style guide for `mr-chelyshkin.com`.

## Local development

```sh
cd app
npm ci
npm run dev
```

The main page is available at `/`; the rendered design contract is available at `/styleguide/`.

## Validation

```sh
cd app
npm run build
```

The build validates content, route rewriting, TypeScript, SEO placeholders, static routes, and required production assets. Repository CI additionally runs the dependency audit and Terraform format/validation tasks through `soltiHQ/actions@v1`.

## Production architecture

- Vue 3, TypeScript, Vite, and Sass in `app/`.
- Private, encrypted, versioned S3 origin in `tf/`.
- CloudFront OAC, HTTPS-only delivery, security headers, clean static routes, and external DNS.
- Pull request checks through the shared static CI workflow.
- Tags matching `v*` build, apply Terraform, deploy through GitHub OIDC, invalidate CloudFront, and create a GitHub release.

The release workflow expects these GitHub repository variables:

- `AWS_REGION`
- `TF_STATE_BUCKET`
- `TF_STATE_KEY`
- `TF_STATE_REGION`
- `AWS_TERRAFORM_DEPLOY_ROLE_ARN`
- `SITE_DOMAIN_NAME`
- `SITE_BUCKET_NAME`
- `SITE_ACM_CERTIFICATE_ARN`

DNS and the ACM certificate are managed outside this repository.

## License

The source code is provided under the terms in [LICENSE](LICENSE). Personal content — including biography, project descriptions, employment history, and images — is not licensed for reuse without explicit written permission.
