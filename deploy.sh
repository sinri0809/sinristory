#!/bin/bash

DIRECTORY_NAME="sinri_story_deploy"
DIRECTORY_PATH="./../${DIRECTORY_NAME}";

echo "---------------------------------------------------";
echo "start build & ready deploy";
echo "---------------------------------------------------";

npm run build;

function readyDeploy () {
  echo "---------------------------------------------------";
  echo "move items in "${DIRECTORY_NAME}"";
  echo "---------------------------------------------------";
  cp ./build/* -r "${DIRECTORY_PATH}";
}

echo "---------------------------------------------------";
echo "---------------------------------------------------";

# if [-d "${DIRECTORY_PATH}"] # []를 해석 못함
if test -d "${DIRECTORY_PATH}"; then
  echo "배포 디렉토리 존재";
else 
  echo "배포 디렉토리 없음 -> 생성" && mkdir "${DIRECTORY_PATH}"
fi

readyDeploy;

echo "---------------------------------------------------";
echo "---------------------------------------------------";
echo "done";