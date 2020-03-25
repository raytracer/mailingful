package main

import (
	"io"
	"io/ioutil"
	"os"
	"path"
	"strings"
)

// Reads all .txt files in the current folder
// and encodes them as strings literals in textfiles.go
func main() {
	fs, _ := ioutil.ReadDir("./sql")
	out, _ := os.Create("sqlfiles.go")
	out.Write([]byte("package main \n\nconst (\n"))
	for _, f := range fs {
		if strings.HasSuffix(f.Name(), ".sql") {
			out.Write([]byte(strings.TrimSuffix(f.Name(), ".sql") + " = `"))
			f, _ := os.Open(path.Join("sql", f.Name()))
			io.Copy(out, f)
			out.Write([]byte("`\n"))
		}
	}
	out.Write([]byte(")\n"))
}
