Para windows:

1. descarga el binario desde: https://github.com/thedevsaddam/docgen/releases
2. guárdalo en una carpeta junto a los docs.json que consigues exportando tu api de postman como json
3. tu docs.json debe tener reemplazado {{URL}} por https://localhost:5000
4. abre cmd y ejecuta windows_amd64 build -i fileName.json -o index.html
5. se creará un index con el doc de tu api
