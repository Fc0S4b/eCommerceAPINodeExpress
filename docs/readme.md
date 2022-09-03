Para windows:

1. descarga el binario desde: https://github.com/thedevsaddam/docgen/releases
2. guárdalo en una carpeta junto a los docs.json que consigues exportando tu api de postman como json
3. tu docs.json debe tener reemplazado {{URL}} por https://localhost:5000
4. abre cmd y ejecuta windows_amd64 build -i fileName.json -o index.html
5. se creará un index con el doc de tu api, ese index va en public folder
6. debes cambiar la url si lo tienes en desarrollo
7. existe un index-copy que es para solucionar un problema con helmet, ya que este bloquea javascript inline. La solución es sacarle el script al index y colocarlo en un archivo (browser-app.js), en el index debes hacer que el script apunte a ese archivo
