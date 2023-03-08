# NodeOpenAi installation

Create your project folder and run the following command on your linux command line

git clone https://github.com/sonofdust/NodeOpenAi.git

Once project is installed run the following.

npm install.

This will install all of your node_modules

Create a .env file in the root of your project and add the following to your file

OPEN_AI_KEY='YOUR OPEN AI KEY'

This key is from your ChatGBT account. If you have amy questions go to this link https://platform.openai.com/account/api-keys

# Postman

Create a json file with the below content and import it into postman.

{
"info": {
"\_postman_id": "609671fc-6b6c-4f65-b938-184c28ca8c86",
"name": "ChatBot",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
},
"item": [
{
"name": "PostChat",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"prompt\":\"What is the capitol of Arizona?\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "localhost:5000/chat",
"host": [
"localhost"
],
"port": "5000",
"path": [
"chat"
]
}
},
"response": []
}
]
}

# How to run the project.

From the command of your project type in

npm run dev

This will start the Node server.

From postman import the above JSON file and run the post command.
