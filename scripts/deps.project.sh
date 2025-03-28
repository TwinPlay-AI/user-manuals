#!/bin/bash

# WARN:
# This file is autogenerated and should not be modified directly. See scaffold project (url: https://github.com/TwinPlay-AI/scaffold)

set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

set -o pipefail

WORKDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."

main(){
  echo "[INFO] Installing project dependencies"
}

main "$@"
