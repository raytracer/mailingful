module mailingful.com/mailingful-lambda

require (
	github.com/aws/aws-lambda-go v1.8.0
	github.com/aws/aws-sdk-go v1.16.11
	github.com/google/pprof v0.0.0-20181206194817-3ea8567a2e57 // indirect
	github.com/ianlancetaylor/demangle v0.0.0-20181102032728-5e5cf60278f6 // indirect
	github.com/jhillyerd/enmime v0.5.0
	github.com/satori/go.uuid v1.2.0
	golang.org/x/arch v0.0.0-20181203225421-5a4828bb7045 // indirect
	golang.org/x/crypto v0.0.0-20181203042331-505ab145d0a9 // indirect
	golang.org/x/sys v0.0.0-20181221143128-b4a75ba826a6 // indirect
	mailingful.com/mailingful-server/queries v0.0.0
)

replace mailingful.com/mailingful-server/queries => ../../../mailingful-server/queries
