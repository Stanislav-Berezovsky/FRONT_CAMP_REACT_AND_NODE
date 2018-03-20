export default body => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React App</title>
            <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        </head>
        <body>
            <div id="root">${body}</div>
            <script type="text/javascript" src="static/js/main.js"></script>
        </body>
    </html>
`