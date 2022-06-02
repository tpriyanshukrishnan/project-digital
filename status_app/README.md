run:
python3 -m api_server 

curl_cmd:
curl -l http://localhost:5000/get 

curl -l -H "Content-Type: application/json" -X POST -d '{"username":"user","password": "pass"}' http://localhost:5000/post 

curl -l -H "Content-Type: application/json" -X POST -d '{"username":"wrong","password": "wrong"}' http://localhost:5000/post 

curl -l http://localhost:5000/redirect

curl -l http://localhost:5000/divide_by_zero 

curl -l http://localhost:5000/unavailable_resource