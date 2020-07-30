# node_project_inside_docker_container

Commands to Run

docker build -t razzr73/node_app .

#razzr73/node_app<== for naming and tagging DockerImage
docker run -p 4000:3000 razzr73/node_app

#4000 == > Your Local machine port
#3000 ==>  Docker port
