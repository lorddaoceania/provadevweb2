import app from "./src/app.js"

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`server is listenning to port http://localhost:${port}`);
})