module mailingful.com/mailingful-server

require (
	github.com/aws/aws-sdk-go v1.16.11
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/fortytw2/leaktest v1.3.0 // indirect
	github.com/gin-contrib/cors v0.0.0-20181206035131-7c641a7a7dc5
	github.com/gin-contrib/sse v0.0.0-20170109093832-22d885f9ecc7 // indirect
	github.com/gin-gonic/gin v1.3.0
	github.com/golang/protobuf v1.2.0 // indirect
	github.com/json-iterator/go v1.1.6 // indirect
	github.com/lib/pq v1.0.0
	github.com/mailru/easyjson v0.0.0-20180823135443-60711f1a8329 // indirect
	github.com/mattn/go-isatty v0.0.4 // indirect
	github.com/meirf/gopart v0.0.0-20180520194036-37e9492a85a8
	github.com/microcosm-cc/bluemonday v1.0.2
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.1 // indirect
	github.com/olivere/elastic v6.2.14+incompatible
	github.com/pkg/errors v0.8.0 // indirect
	github.com/satori/go.uuid v1.2.0
	github.com/stretchr/testify v1.3.0 // indirect
	github.com/ugorji/go/codec v0.0.0-20181209151446-772ced7fd4c2 // indirect
	golang.org/x/crypto v0.0.0-20190308221718-c2843e01d9a2
	golang.org/x/net v0.0.0-20190328230028-74de082e2cca // indirect
	golang.org/x/sync v0.0.0-20190412183630-56d357773e84 // indirect
	gopkg.in/alexcesaro/quotedprintable.v3 v3.0.0-20150716171945-2caba252f4dc // indirect
	gopkg.in/go-playground/assert.v1 v1.2.1 // indirect
	gopkg.in/go-playground/validator.v8 v8.18.2 // indirect
	gopkg.in/gomail.v2 v2.0.0-20160411212932-81ebce5c23df
	gopkg.in/yaml.v2 v2.2.2 // indirect
	mailingful.com/mailingful-server/queries v0.0.0
)

replace mailingful.com/mailingful-server/queries => ./queries
