const fs = require('fs');
const express = require('express');
const app = express();
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        app.get('/buy/:id', function (req, res) {
            const idOfUser = parseInt(req.params.id);
            const user = JSON.parse(data).find((user) => user.id === idOfUser);
            if (!user) {
                res.status(404).send();
            }
            res.status(200).json(user);
        });
        app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });

    } else {
        console.error(err);
    }
});
