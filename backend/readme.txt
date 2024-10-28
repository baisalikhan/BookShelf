1. npm init -y
2. npm i express mysql nodemon
3. created index.js (file name can vary)

4. initial code/app:
    import express from "express";
    const app = express();

    app.listen(8800, () => {
    console.log("Connected to backend");
    });

5. node index.js (file_name) to start the server

6. Add the following line in the package.js

    6.1 "type": "module", (the error on 'import line in header' will end)

    6.2 Add the following line in the package.js > scripts
        "start": "nodemon index.js"

7. npm i cors
    for allowing the client to communicate with backend