#!/bin/bash
preact build
aws s3 sync --acl public-read --sse --delete build s3://mailingful.com
aws cloudfront create-invalidation --distribution-id E29HBPPBHCXSA0 --paths '/*'
