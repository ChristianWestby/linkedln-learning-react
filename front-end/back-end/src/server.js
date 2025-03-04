import express from 'express';


const app = express();

app.get('/hello', function(req, res) {    
    res.send('Hello from a GET endpoint');
}
);

app.post('/hello', function(req, res) {
    res.send('Hello from a POST endpoint!');
})

app.listen(8000, function() {
   console.log('Server is running on port 8000'); 
});